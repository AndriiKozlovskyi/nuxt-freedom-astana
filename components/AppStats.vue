<template>
  <section id="stats">
    <div class="container">
      <h2 class="stats-title">{{ t('stats.title') }}</h2>
      <div class="stats-grid">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          ref="itemRefs"
          :class="['stat-item reveal', `d-${i + 1}`]"
          :data-target="stat.target"
          :data-suffix="stat.suffix"
        >
          <div class="icon-box">
            <RotatingText text="CZM FREEDOM CZM FREEDOM CZM FREEDOM CZM FREEDOM " />
            <div class="stat-val" data-val>0</div>
          </div>
          <p class="stat-label-small">{{ stat.label }}</p>
          <h5 class="stat-label-large">{{ stat.sublabel }}</h5>
        </div>
      </div>
      <div class="map-badges">
        <a href="https://2gis.kz/astana/firm/70000001059285683/tab/reviews" target="_blank" rel="noopener noreferrer" class="map-badge badge-2gis">
          <img :src="gisLogo" alt="2GIS" class="badge-icon" />
          <span class="badge-rating">5.0</span>
          <div class="badge-info">
            <span class="badge-name">2ГИС</span>
            <div class="badge-stars">★★★★★</div>
          </div>
        </a>
        <a href="https://maps.app.goo.gl/wgLr55pZ6Lqy3cDf7" target="_blank" rel="noopener noreferrer" class="map-badge badge-google">
          <img :src="googleLogo" alt="Google Maps" class="badge-icon" />
          <span class="badge-rating">4.9</span>
          <div class="badge-info">
            <span class="badge-name">GOOGLE</span>
            <div class="badge-stars">★★★★★</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gisLogo from '~/assets/images/logos/2GIS.png'
import googleLogo from '~/assets/images/logos/googlemaps.png'

const { t } = useI18n()

const itemRefs = ref<HTMLElement[]>([])

const stats = computed(() => [
  { target: 7, suffix: '', label: t('stats.label1'), sublabel: t('stats.sublabel1') },
  { target: 4589, suffix: '', label: t('stats.label2'), sublabel: t('stats.sublabel2') },
  { target: 14, suffix: '', label: t('stats.label3'), sublabel: t('stats.sublabel3') },
  { target: 1, suffix: '', label: t('stats.label4'), sublabel: t('stats.sublabel4') },
])

onMounted(() => {
  const DURATION = 2000

  function animateCounter(el: HTMLElement, target: number, suffix: string) {
    const valEl = el.querySelector<HTMLElement>('[data-val]')
    if (!valEl) return
    let start: number | null = null
    function step(ts: number) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      valEl!.textContent = Math.round(eased * target).toLocaleString() + suffix
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        el.classList.add('show')
        animateCounter(el, Number(el.dataset.target), el.dataset.suffix ?? '')
        observer.unobserve(el)
      }
    })
  }, { threshold: 0 })

  itemRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>
