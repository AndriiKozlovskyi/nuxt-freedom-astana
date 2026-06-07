<template>
  <section id="hero">
    <video class="hero-video-bg" autoplay muted loop playsinline preload="metadata">
      <source :src="heroVideo" type="video/mp4" />
    </video>
    <div class="hero-bg" />
    <div class="hero-blob-1" />
    <div class="hero-blob-2" />
    <div class="hero-ring-1" />
    <div class="hero-ring-2" />
    <div class="hero-ring-3" />

    <div v-for="(p, i) in particles" :key="i" class="hero-particle" :style="p" />

    <div v-for="(c, i) in crosses" :key="`c-${i}`" :style="{ position: 'absolute', top: c.top, right: c.right, width: `${c.size}px`, height: `${c.size}px`, opacity: c.opacity, animation: c.animation, pointerEvents: 'none' }">
      <div :style="{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1.5px', background: c.color, transform: 'translateY(-50%)' }" />
      <div :style="{ position: 'absolute', left: '50%', top: 0, width: '1.5px', height: '100%', background: c.color, transform: 'translateX(-50%)' }" />
    </div>

    <div class="container">
      <div class="hero-grid">
        <div>
          <h1 class="hero-title font-display">
            <span v-for="(line, i) in t('hero.title').split('\n')" :key="i">{{ line }}<br class="hero-title-break" /></span>
          </h1>
          <p class="hero-sub font-body">{{ t('hero.subtitle') }}</p>
          <div class="hero-ctas">
            <a href="#contact" class="btn btn-gold">
              {{ t('hero.cta1') }}
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="tel:+77788100900" class="btn btn-ghost">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {{ t('hero.cta2') }}
            </a>
          </div>
          <div class="hero-trust">
            <div class="hero-trust-item"><span class="ico">🔒</span>{{ t('hero.trust1') }}</div>
            <div class="hero-trust-item"><span class="ico">⚡</span>{{ t('hero.trust2') }}</div>
          </div>
          <div class="hero-socials-mobile">
            <a href="tel:87788100900" style="display: inline-flex; flex-shrink: 0">
              <img src="https://static.tildacdn.pro/tild3633-6333-4138-a264-663361613230/logopdf_8.png" alt="Phone" width="50" height="50" style="width: 50px; height: 50px; object-fit: contain; display: block" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=77788100900" target="_blank" rel="nofollow noopener noreferrer" style="display: inline-flex; flex-shrink: 0">
              <img src="https://static.tildacdn.pro/tild6162-6535-4562-b636-616564303634/logopdf_9.png" alt="WhatsApp" width="50" height="50" style="width: 50px; height: 50px; object-fit: contain; display: block" />
            </a>
            <a href="https://t.me/CZM_Freedom" target="_blank" rel="nofollow noopener noreferrer" style="display: inline-flex; flex-shrink: 0">
              <img src="https://static.tildacdn.pro/tild6537-6463-4436-a234-323061326563/logopdf_12.png" alt="Telegram" width="50" height="50" style="width: 50px; height: 50px; object-fit: contain; display: block" />
            </a>
            <a href="https://www.instagram.com/czmfreedom" target="_blank" rel="nofollow noopener noreferrer" style="display: inline-flex; flex-shrink: 0">
              <img src="https://static.tildacdn.pro/tild3530-6563-4563-a131-373232623933/logopdf_10.png" alt="Instagram" width="50" height="50" style="width: 50px; height: 50px; object-fit: contain; display: block" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-ind">
      <div class="scroll-mouse"><div class="scroll-wheel" /></div>
      <span class="scroll-lbl">{{ t('hero.scroll') }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroVideo from '~/assets/images/hero/forest.mp4'

const { t } = useI18n()

const particles = [
  { left: '8%', top: '20%', width: '3px', height: '3px', background: 'var(--brand-500)', animation: 'float 8s ease-in-out infinite' },
  { left: '22%', top: '65%', width: '2px', height: '2px', background: 'rgba(255,255,255,.5)', animation: 'drift 10s ease-in-out infinite 1s' },
  { left: '35%', top: '30%', width: '4px', height: '4px', background: 'var(--brand-400)', opacity: '0.5', animation: 'float 9s ease-in-out infinite 2s' },
  { left: '60%', top: '75%', width: '2px', height: '2px', background: 'rgba(255,255,255,.4)', animation: 'drift 7s ease-in-out infinite .5s' },
  { left: '78%', top: '18%', width: '3px', height: '3px', background: 'var(--brand-300)', animation: 'float 11s ease-in-out infinite 1.5s' },
  { left: '88%', top: '55%', width: '2px', height: '2px', background: 'rgba(255,255,255,.3)', animation: 'drift 8s ease-in-out infinite 3s' },
]

const crosses = [
  { top: '22%', right: '24%', size: 18, opacity: 0.18, color: 'var(--brand-500)', animation: 'float 9s ease-in-out infinite 1s' },
  { top: '70%', right: '40%', size: 12, opacity: 0.12, color: 'var(--brand-300)', animation: 'drift 11s ease-in-out infinite 2s' },
]
</script>
