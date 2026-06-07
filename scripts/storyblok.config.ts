/**
 * Project-specific Storyblok configuration.
 * This is the ONLY file you need to edit when reusing these scripts.
 */

import ruMessages from '../i18n/locales/ru.json'
import kzMessages from '../i18n/locales/kz.json'

const config = {
  // ── Auth ──────────────────────────────────────────────────────────────────
  pat: process.env.STORYBLOK_MANAGEMENT_TOKEN ?? '',

  // ── Site public URL (used for asset preview in Storyblok editor) ──────────
  siteUrl: 'https://freedom-astana.kz',

  // ── Stories (one per locale) ──────────────────────────────────────────────
  stories: [
    { slug: 'ru', name: 'Home (RU)', path: '/ru', messages: ruMessages as Record<string, any> },
    { slug: 'kz', name: 'Home (KZ)', path: '/kz', messages: kzMessages as Record<string, any> },
  ],

  // ── Images to upload from public/ to Storyblok asset library ─────────────
  images: [] as string[],
}

export default config
export type StoryblokConfig = typeof config
