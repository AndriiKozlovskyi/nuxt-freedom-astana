<template>
  <section id="faq" class="section" style="background: #fff">
    <div class="container">
      <div class="section-head">
        <div class="reveal">
          <span class="eyebrow">{{ t('faq.eyebrow') }}</span>
        </div>
        <h2 class="section-title reveal d-1">{{ t('faq.title') }}</h2>
        <p class="section-sub reveal d-2">{{ t('faq.subtitle') }}</p>
      </div>
      <div class="faq-wrap">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          :class="['acc-item reveal', i > 0 ? `d-${i}` : '']"
        >
          <button class="acc-btn" @click="toggle(i)">
            <span class="acc-q">{{ item.q }}</span>
            <span class="acc-ic">{{ openIdx === i ? '−' : '+' }}</span>
          </button>
          <div :class="['acc-body', openIdx === i ? 'open' : '']">
            <p class="acc-p">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const openIdx = ref<number | null>(null)

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q5'), a: t('faq.a5') },
  { q: t('faq.q6'), a: t('faq.a6') },
])

const toggle = (i: number) => {
  openIdx.value = openIdx.value === i ? null : i
}
</script>
