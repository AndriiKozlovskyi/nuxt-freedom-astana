/**
 * Seeds existing Storyblok stories with content from locale files.
 * Safe to re-run any time – always overwrites story content.
 *
 * Run:  STORYBLOK_MANAGEMENT_TOKEN=<pat> npx tsx scripts/seed-storyblok.ts
 *
 * If scripts/asset-manifest.json exists (produced by upload-assets-to-storyblok.ts),
 * local image paths in locale data are replaced with Storyblok CDN URLs automatically.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import config from './storyblok.config.ts'
import { transformLocaleToStory, setSiteUrl } from '../utils/storyblok.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MANIFEST_PATH = path.join(__dirname, 'asset-manifest.json')

setSiteUrl(config.siteUrl)

const PAT  = config.pat
const BASE = 'https://mapi.storyblok.com/v1'

if (!PAT) {
  console.error('❌ Set STORYBLOK_MANAGEMENT_TOKEN env var')
  process.exit(1)
}

async function mapi(method: string, endpoint: string, body?: unknown) {
  const res = await fetch(`${BASE}${endpoint}`, {
    method,
    headers: { Authorization: PAT, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const json = await res.json() as any
  if (!res.ok) throw new Error(`${method} ${endpoint} → ${res.status}: ${JSON.stringify(json)}`)
  return json
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

type AssetEntry = { id: number; filename: string }

function toSbAsset(entry: AssetEntry): Record<string, unknown> {
  return {
    id: entry.id,
    filename: entry.filename,
    name: entry.filename.split('/').pop() ?? '',
    alt: '',
    title: '',
    focus: '',
    copyright: '',
    fieldtype: 'asset',
    is_external_url: false,
  }
}

/** Recursively walk an object and replace local asset paths with Storyblok asset objects */
function applyManifest(obj: unknown, manifest: Record<string, AssetEntry>): unknown {
  if (typeof obj === 'string') {
    const key = obj.replace(/^\//, '')
    const entry = manifest[key]
    return entry ? toSbAsset(entry) : obj
  }
  if (Array.isArray(obj)) return obj.map(v => applyManifest(v, manifest))
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).map(([k, v]) => [k, applyManifest(v, manifest)])
    )
  }
  return obj
}

async function main() {
  console.log('🔑 Using PAT:', PAT.slice(0, 6) + '…')

  type AssetEntry = { id: number; filename: string }

  // Load asset manifest if present
  const manifest: Record<string, AssetEntry> = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
    : {}
  const hasManifest = Object.keys(manifest).length > 0
  if (hasManifest) console.log(`📄 Asset manifest loaded (${Object.keys(manifest).length} entries)`)
  else console.log('⚠️  No asset manifest found – run storyblok:upload first to replace local image paths')

  const { spaces } = await mapi('GET', '/spaces')
  if (!spaces?.length) throw new Error('No spaces found.')
  const spaceId: number = spaces[0].id
  console.log(`\n📦 Space: ${spaces[0].name} (${spaceId})\n`)

  for (const { slug, name, path: realPath, messages } of config.stories) {
    // Apply CDN URLs before transforming to story format
    const resolved = applyManifest(messages, manifest) as Record<string, any>
    const content = transformLocaleToStory(resolved)

    await sleep(250)
    const res = await mapi('GET', `/spaces/${spaceId}/stories?with_slug=${slug}`)
    const storyId: number | undefined = res.stories?.[0]?.id

    if (!storyId) {
      console.log(`   ✗ ${slug} not found – run storyblok:migrate first`)
      continue
    }

    await sleep(250)
    await mapi('PUT', `/spaces/${spaceId}/stories/${storyId}`, {
      story: { name, slug, content, real_path: realPath }, publish: 1,
    })
    console.log(`   ✓ ${slug} seeded + published`)
  }

  console.log('\n✅ Done!')
}

main().catch(e => { console.error('❌', e.message); process.exit(1) })
