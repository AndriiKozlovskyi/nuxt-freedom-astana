<template>
  <div>
    <button id="btt" :aria-label="t('header.topButton')">↑</button>

    <div class="mobile-menu" id="mobileMenu">
      <div class="mobile-menu-header">
        <a href="#hero" class="mobile-menu-logo" @click="closeMobile">
          <span class="mobile-menu-logo-text">
            <span class="text-gold">CZM </span>FREEDOM
          </span>
        </a>
        <button class="mobile-menu-close" aria-label="Close menu" @click="closeMobile">
          <span /><span />
        </button>
      </div>

      <nav class="mobile-menu-nav">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="mobile-menu-link" @click="closeMobile">
          <span class="menu-link-icon">{{ link.icon }}</span>
          <span class="menu-link-text">{{ link.label }}</span>
          <span class="link-arrow">→</span>
        </a>
      </nav>

      <div class="mobile-menu-bottom">
        <a href="tel:+77788100900" class="mobile-menu-phone">
          <svg class="phone-icon" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.45">
            <path fill="#fff" fill-rule="nonzero" d="M141 209.38c17.22 31.02 37.04 60.82 62.81 88.02 25.83 27.33 57.94 52.21 99.56 73.45 3.08 1.51 6.01 1.51 8.61.47 3.97-1.51 7.99-4.78 11.97-8.75 3.07-3.07 6.9-7.99 10.92-13.38 15.99-21.05 35.81-47.16 63.76-34.1.61 1.28 1.09.61 1.7.89l93.27 53.64c.28.14.61.47.9.61 12.3 8.47 17.36 21.52 17.5 36.28 0 15.04-5.53 31.97-13.67 46.26-10.74 18.87-26.58 31.35-44.84 39.63-17.35 7.99-36.7 12.3-55.29 15.04-29.18 4.3-56.51 1.56-84.47-7.05-27.34-8.46-54.86-22.42-84.94-41l-2.23-1.42c-13.81-8.61-28.71-17.83-43.32-28.71-53.59-40.44-108.12-98.8-143.64-163.03C9.81 212.31-6.47 154.09 2.43 98.61 7.34 68.2 20.4 40.53 43.15 22.27 62.97 6.28 89.69-2.46 124.26.61c3.98.28 7.52 2.6 9.37 6.01l59.78 101.07c8.75 11.35 9.84 22.56 5.06 33.82-3.97 9.22-11.96 17.68-22.89 25.63-3.22 2.74-7.05 5.53-11.07 8.47-13.38 9.69-28.57 20.9-23.36 34.1l-.15-.33z" />
          </svg>
          <span class="phone-text">{{ t('header.phone') }}</span>
        </a>
        <button class="mobile-menu-lang" aria-label="Переключить язык" :title="locale === 'ru' ? 'Қазақша' : 'Русский язык'" @click="toggleLanguage">
          <span class="lang-text">{{ locale === 'ru' ? 'Қазақша' : 'Русский язык' }}</span>
        </button>
        <div class="mobile-menu-socials">
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

    <nav id="nav">
      <div class="nav-inner">
        <a href="#hero" class="nav-logo">
          <img :src="logo" alt="CZM Freedom" class="nav-logo-img" />
          <div class="nav-logo-text-wrap">
            <span class="nav-logo-text"><span class="text-gold">CZM </span>FREEDOM</span>
            <span class="nav-logo-sub">{{ t('header.clinic') }}</span>
          </div>
        </a>
        <div class="nav-links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">{{ link.label }}</a>
        </div>
        <button class="lang-switcher" aria-label="Переключить язык" :title="locale === 'ru' ? 'Қазақша' : 'Русский'" @click="toggleLanguage">
          {{ locale === 'ru' ? 'KZ' : 'RU' }}
        </button>
        <a href="tel:+77788100900" class="btn btn-gold btn-sm nav-cta">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {{ t('header.phone') }}
        </a>
        <div class="nav-socials">
          <a href="https://wa.me/77788100900" target="_blank" rel="noopener noreferrer" class="nav-social" title="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://t.me/czm_freedom" target="_blank" rel="noopener noreferrer" class="nav-social" title="Telegram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="https://instagram.com/czmfreedom" target="_blank" rel="noopener noreferrer" class="nav-social" title="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
        <button class="hamburger" id="hamburger" :aria-label="t('header.menuLabel')" @click="toggleMobile">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import logo from '~/assets/images/language/logo.png'

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const navLinks = computed(() => [
  { href: '#about', icon: 'ℹ️', label: t('header.about') },
  { href: '#services', icon: '⚕️', label: t('header.services') },
  { href: '#stages', icon: '📋', label: t('header.treatment') },
  { href: '#team', icon: '👥', label: t('header.team') },
  { href: '#testi', icon: '⭐', label: t('header.testimonials') },
  { href: '#faq', icon: '❓', label: t('header.faq') },
  { href: '#contact', icon: '📍', label: t('header.contacts') },
])

const toggleLanguage = () => {
  const newLang = locale.value === 'ru' ? 'kz' : 'ru'
  navigateTo(switchLocalePath(newLang))
}

function toggleMobile() {
  const m = document.getElementById('mobileMenu')
  const h = document.getElementById('hamburger')
  m?.classList.toggle('open')
  h?.classList.toggle('open')
  document.body.style.overflow = m?.classList.contains('open') ? 'hidden' : ''
}

function closeMobile() {
  document.getElementById('mobileMenu')?.classList.remove('open')
  document.getElementById('hamburger')?.classList.remove('open')
  document.body.style.overflow = ''
}

onMounted(() => {
  const nav = document.getElementById('nav')
  const btt = document.getElementById('btt')

  const onScroll = () => {
    nav?.classList.toggle('scrolled', window.scrollY > 60)
    btt?.classList.toggle('show', window.scrollY > 400)
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  const onBttClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  btt?.addEventListener('click', onBttClick)

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    btt?.removeEventListener('click', onBttClick)
  })
})
</script>
