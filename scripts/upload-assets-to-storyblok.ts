/**
 * Uploads local images to the Storyblok asset library.
 *
 * Run:  STORYBLOK_MANAGEMENT_TOKEN=<pat> npx tsx scripts/upload-assets-to-storyblok.ts
 *
 * Walks assets/images/** and uploads every image file once.
 * Already-uploaded files are skipped (tracked in scripts/asset-manifest.json).
 * The manifest maps local paths → Storyblok CDN URLs and is used by
 * seed-storyblok.ts to replace local paths with CDN URLs in story content.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const MANIFEST_PATH = path.join(__dirname, 'asset-manifest.json')

const PAT = process.env.STORYBLOK_MANAGEMENT_TOKEN ?? ''
const BASE = 'https://mapi.storyblok.com/v1'

if (!PAT) {
  console.error('❌ Set STORYBLOK_MANAGEMENT_TOKEN env var')
  process.exit(1)
}

const IMAGE_EXT = /\.(jpg|jpeg|png|gif|svg|webp)$/i
const MIME: Record<string, string> = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.webp': 'image/webp',
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

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

function walkDir(dir: string): string[] {
  const out: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkDir(full))
    else out.push(full)
  }
  return out
}

async function uploadAsset(spaceId: number, filePath: string): Promise<string> {
  const filename = path.basename(filePath)
  const mimeType = MIME[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream'
  const fileBuffer = fs.readFileSync(filePath)

  // Step 1: Request signed S3 upload URL from Storyblok
  const signed = await mapi('POST', `/spaces/${spaceId}/assets`, {
    filename,
    size: fileBuffer.byteLength,
    asset_folder_id: null,
  })

  // Step 2: POST multipart form to S3 using the signed fields
  const form = new FormData()
  for (const [key, value] of Object.entries(signed.fields as Record<string, string>)) {
    form.append(key, value)
  }
  form.append('file', new Blob([fileBuffer], { type: mimeType }), filename)

  const s3res = await fetch(signed.post_url, { method: 'POST', body: form })
  // S3 returns 204 on success
  if (!s3res.ok && s3res.status !== 204) {
    throw new Error(`S3 upload failed: ${s3res.status}`)
  }

  // Step 3: Finalize — tell Storyblok the upload completed
  await sleep(300)
  await mapi('GET', `/spaces/${spaceId}/assets/${signed.id}/finish_upload`)

  // Build CDN URL
  const cdnUrl: string =
    signed.pretty_url ??
    `https://a.storyblok.com/f/${spaceId}/${signed.id}/${filename}`

  return cdnUrl
}

async function main() {
  console.log('🔑 Using PAT:', PAT.slice(0, 6) + '…')

  const { spaces } = await mapi('GET', '/spaces')
  if (!spaces?.length) throw new Error('No spaces found.')
  const spaceId: number = spaces[0].id
  console.log(`\n📦 Space: "${spaces[0].name}" (${spaceId})\n`)

  // Load existing manifest so re-runs skip already-uploaded files
  const manifest: Record<string, string> = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
    : {}

  const imagesDir = path.join(ROOT, 'assets', 'images')
  const allFiles = walkDir(imagesDir).filter(f => IMAGE_EXT.test(f))
  console.log(`🖼  Found ${allFiles.length} image files\n`)

  let uploaded = 0, skipped = 0, failed = 0

  for (const filePath of allFiles) {
    const relKey = path.relative(ROOT, filePath).replace(/\\/g, '/')

    if (manifest[relKey]) {
      console.log(`   ~ ${relKey}`)
      skipped++
      continue
    }

    await sleep(400)
    try {
      const cdnUrl = await uploadAsset(spaceId, filePath)
      manifest[relKey] = cdnUrl
      // Write manifest after every upload so progress is saved on failure
      fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))
      console.log(`   ✓ ${relKey}`)
      console.log(`     → ${cdnUrl}`)
      uploaded++
    } catch (e) {
      console.error(`   ✗ ${relKey}: ${(e as Error).message}`)
      failed++
    }
  }

  console.log(`\n✅ Done — uploaded: ${uploaded}, skipped: ${skipped}, failed: ${failed}`)
  console.log(`📄 Manifest saved to: ${MANIFEST_PATH}`)
}

main().catch(e => { console.error('❌', e.message); process.exit(1) })
