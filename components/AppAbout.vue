<template>
  <section id="about" class="about-gallery-section">
    <div class="container">
      <h2 class="about-gallery-title reveal">{{ t('aboutGallery.title') }}</h2>
      <p class="about-gallery-subtitle reveal d-1">{{ t('aboutGallery.subtitle') }}</p>

      <div class="about-gallery-grid">
        <div class="about-video-inline">
          <AppVideoWidget :inline="true" />
        </div>

        <div class="about-gallery-cards about-gallery-cards--left">
          <div v-for="(f, i) in features.slice(0, 2)" :key="i" :class="['about-gallery-card reveal', `d-${i + 1}`]">
            <div class="about-gallery-card__icon" v-html="f.icon" />
            <h4 class="about-gallery-card__title">{{ f.title }}</h4>
            <p class="about-gallery-card__desc">{{ f.desc }}</p>
          </div>
        </div>

        <div class="about-gallery-mosaic reveal d-2">
          <div v-for="(src, i) in photos" :key="i" :class="`about-gallery-mosaic__item about-gallery-mosaic__item--${i + 1}`">
            <img :src="src" :alt="`Room ${i + 1}`" loading="lazy" />
          </div>
        </div>

        <div class="about-gallery-cards about-gallery-cards--right">
          <div v-for="(f, i) in features.slice(2)" :key="i" :class="['about-gallery-card reveal', `d-${i + 3}`]">
            <div class="about-gallery-card__icon" v-html="f.icon" />
            <h4 class="about-gallery-card__title">{{ f.title }}</h4>
            <p class="about-gallery-card__desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import room1 from '~/assets/images/house/room1.jpeg'
import room2 from '~/assets/images/house/room2.jpeg'
import room3 from '~/assets/images/house/room3.jpeg'
import room4 from '~/assets/images/house/room4.jpeg'
import room5 from '~/assets/images/house/room5.jpeg'

const { t } = useI18n()

const photos = [room1, room2, room3, room4, room5]

const iconIndividual = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#2dd4bf" stroke-width="2" fill="#f0fdfa"/><path d="M24 16a4 4 0 110 8 4 4 0 010-8zm0 10c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" fill="#2dd4bf"/><circle cx="34" cy="16" r="3" stroke="#2dd4bf" stroke-width="1.5" fill="none"/></svg>`
const iconProgram = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="4" y="6" width="40" height="36" rx="4" stroke="#2dd4bf" stroke-width="2" fill="#f0fdfa"/><path d="M4 14h40M16 6v8M32 6v8" stroke="#2dd4bf" stroke-width="2"/><rect x="10" y="20" width="6" height="6" rx="1" fill="#2dd4bf"/><rect x="21" y="20" width="6" height="6" rx="1" fill="#2dd4bf" opacity=".5"/><rect x="32" y="20" width="6" height="6" rx="1" fill="#2dd4bf" opacity=".3"/><rect x="10" y="30" width="6" height="6" rx="1" fill="#2dd4bf" opacity=".5"/></svg>`
const iconMonitoring = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#2dd4bf" stroke-width="2" fill="#f0fdfa"/><text x="24" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#2dd4bf">24</text><line x1="18" y1="26" x2="30" y2="26" stroke="#2dd4bf" stroke-width="2"/><text x="24" y="36" text-anchor="middle" font-size="14" font-weight="700" fill="#2dd4bf">7</text></svg>`
const iconCertified = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="4" width="32" height="28" rx="3" stroke="#2dd4bf" stroke-width="2" fill="#f0fdfa"/><path d="M24 32l-6 12 6-4 6 4-6-12z" fill="#2dd4bf"/><path d="M16 14h16M16 20h10" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round"/></svg>`

const features = computed(() => [
  { icon: iconIndividual, title: t('aboutGallery.feat1'), desc: t('aboutGallery.feat1Desc') },
  { icon: iconProgram, title: t('aboutGallery.feat2'), desc: t('aboutGallery.feat2Desc') },
  { icon: iconMonitoring, title: t('aboutGallery.feat3'), desc: t('aboutGallery.feat3Desc') },
  { icon: iconCertified, title: t('aboutGallery.feat4'), desc: t('aboutGallery.feat4Desc') },
])
</script>
