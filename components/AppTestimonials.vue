<template>
  <section id="testi" class="section">
    <div class="container">
      <div class="testi-grid">
        <div>
          <div class="reveal">
            <span class="eyebrow">{{ t('testimonials.eyebrow') }}</span>
          </div>
          <h2 class="section-title reveal d-1" style="text-align: left">
            <span v-for="(line, i) in t('testimonials.title').split('\n')" :key="i">{{ line }}<br /></span>
          </h2>
          <p style="font-size: 0.93rem; color: var(--ink-500); line-height: 1.82; margin-top: 1rem; margin-bottom: 2rem; font-weight: 300" class="reveal d-2">
            {{ t('testimonials.subtitle') }}
          </p>
          <div class="testi-dots reveal d-3">
            <button
              v-for="(_, i) in testis"
              :key="i"
              :class="['testi-dot', i === activeT ? 'active' : '']"
              @click="handleSetTesti(i)"
            />
          </div>
        </div>
        <div class="testi-cards reveal-r d-2">
          <div
            v-for="(testi, i) in testis"
            :key="i"
            :class="['testi-card', i === activeT ? 'active' : '']"
            @click="handleSetTesti(i)"
          >
            <div class="testi-stars">
              <span v-for="si in testi.r" :key="si" class="testi-star">★</span>
            </div>
            <p class="testi-text">{{ testi.text }}</p>
            <div class="testi-author">
              <div class="testi-avatar">👤</div>
              <div>
                <div class="testi-author-name">{{ testi.name }}</div>
                <div class="testi-author-meta">{{ testi.city }} · {{ testi.age }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const activeT = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const testis = computed(() => [
  { text: t('testimonials.testi1'), name: t('testimonials.testi1Name'), city: t('testimonials.testi1City'), age: t('testimonials.testi1Age'), r: 5 },
  { text: t('testimonials.testi2'), name: t('testimonials.testi2Name'), city: t('testimonials.testi2City'), age: t('testimonials.testi2Age'), r: 5 },
  { text: t('testimonials.testi3'), name: t('testimonials.testi3Name'), city: t('testimonials.testi3City'), age: t('testimonials.testi3Age'), r: 5 },
  { text: t('testimonials.testi4'), name: t('testimonials.testi4Name'), city: t('testimonials.testi4City'), age: t('testimonials.testi4Age'), r: 5 },
  { text: t('testimonials.testi5'), name: t('testimonials.testi5Name'), city: t('testimonials.testi5City'), age: t('testimonials.testi5Age'), r: 5 },
])

const resetTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    activeT.value = (activeT.value + 1) % testis.value.length
  }, 5500)
}

const handleSetTesti = (i: number) => {
  activeT.value = i
  resetTimer()
}

onMounted(() => {
  resetTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
