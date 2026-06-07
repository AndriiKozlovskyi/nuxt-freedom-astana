<template>
  <section id="team" class="section">
    <div class="container">
      <div class="section-head">
        <div class="reveal">
          <span class="eyebrow">{{ t('team.eyebrow') }}</span>
        </div>
        <h2 class="section-title reveal d-1">
          <span v-for="(line, i) in t('team.title').split('\n')" :key="i">{{ line }}<br /></span>
        </h2>
        <p class="section-sub reveal d-2">{{ t('team.subtitle') }}</p>
      </div>
      <div class="team-grid">
        <div class="team-card reveal d-1">
          <div class="team-avatar team-avatar-even" style="height: 100%">
            <img :src="images[previous]" :alt="names[previous]" class="team-img-bg" />
            <img
              :src="images[current]"
              :alt="names[current]"
              :class="['team-img-fg', fading ? 'team-img-fadein' : '']"
            />
            <button class="team-arrow team-arrow-left" aria-label="Previous" @click="prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button class="team-arrow team-arrow-right" aria-label="Next" @click="next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="team-cta" style="text-align: center">
        <a href="#contact" class="btn btn-primary">{{ t('team.cta') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import employer1 from '~/assets/images/team/employer1.jpeg'
import employer3 from '~/assets/images/team/employer3.jpeg'
import employer4 from '~/assets/images/team/employer4.jpeg'
import employer5 from '~/assets/images/team/employer5.jpeg'
import employer6 from '~/assets/images/team/employer6.jpeg'
import employer7 from '~/assets/images/team/employer7.jpeg'
import employer8 from '~/assets/images/team/employer8.jpeg'
import employer9 from '~/assets/images/team/employer9.jpeg'
import employer10 from '~/assets/images/team/employer10.jpeg'

const { t } = useI18n()

const images = [employer1, employer3, employer4, employer5, employer6, employer7, employer8, employer9, employer10]
const INTERVAL_MS = 4000

const current = ref(0)
const previous = ref(0)
const fading = ref(false)

const names = computed(() => Array.from({ length: 7 }, (_, i) => t(`team.spec${i + 1}`)))

const changeTo = (getNext: (prev: number) => number) => {
  previous.value = current.value
  current.value = getNext(current.value)
  fading.value = true
  setTimeout(() => { fading.value = false }, 500)
}

const next = () => changeTo(prev => (prev + 1) % images.length)
const prev = () => changeTo(prev => (prev - 1 + images.length) % images.length)

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(next, INTERVAL_MS)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
