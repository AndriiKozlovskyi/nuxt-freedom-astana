<template>
  <section id="detox" class="section">
    <div class="container">
      <div class="detox-grid">
        <div class="detox-visual reveal-l">
          <div class="detox-vis-main">
            <div style="justify-content: flex-start; gap: 1.25rem; padding: 2.5rem" class="detox-vis-inner">
              <div>
                <div style="font-size: .7rem; letter-spacing: .2em; font-weight: 700; text-transform: uppercase; color: rgb(255,197,36); margin-bottom: .35rem">
                  {{ t('detox.protocol') }}
                </div>
                <div style="font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #fff; line-height: 1.15">
                  {{ t('detox.title') }}
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: .55rem">
                <div v-for="phase in phases" :key="phase.label">
                  <div style="display: flex; justify-content: space-between; margin-bottom: .3rem">
                    <span style="font-size: 1rem; color: rgba(255,255,255,.8); font-weight: 300">{{ phase.label }}</span>
                    <span style="font-size: 1rem; color: rgba(255,255,255,.8); font-weight: 300">{{ phase.pct }}%</span>
                  </div>
                  <div style="height: 3px; border-radius: 2px; background: rgba(255,255,255,.07); overflow: hidden">
                    <div :style="{ height: '100%', width: `${phase.pct}%`, background: phase.color, borderRadius: '2px', transition: 'width 1s ease' }" />
                  </div>
                </div>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: .6rem">
                <div v-for="vital in vitals" :key="vital.lbl" style="background: rgba(255,255,255,.05); border: 1px solid rgba(249,189,21,.1); border-radius: .85rem; padding: .75rem">
                  <div style="font-size: 1.3rem; font-weight: 400; color: #fff; line-height: 1">
                    {{ vital.val }}<span style="font-size: .65rem; color: rgba(255,255,255,.8); margin-left: 2px">{{ vital.unit }}</span>
                  </div>
                  <div style="font-size: .58rem; color: rgba(255,255,255,1); margin-top: 3px; letter-spacing: .06em; text-transform: uppercase">
                    {{ vital.lbl }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reveal-r">
          <div>
            <span class="eyebrow">{{ t('detox.eyebrow') }}</span>
          </div>
          <h2 class="section-title" style="text-align: left; font-size: clamp(1.8rem,3vw,2.6rem); margin-top: 1rem">
            {{ t('detox.title') }}
          </h2>
          <div style="margin-top: 2rem">
            <div v-for="(item, i) in detoxItems" :key="item.q" class="acc-item">
              <button class="acc-btn" @click="openIdx = openIdx === i ? null : i">
                <span class="acc-q">{{ item.q }}</span>
                <span :class="['acc-ic', openIdx === i ? 'open' : '']">+</span>
              </button>
              <div :class="['acc-body', openIdx === i ? 'open' : '']">
                <p class="acc-p">{{ item.a }}</p>
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

const phases = computed(() => [
  { label: t('detox.phase1'), pct: 100, color: '#4ade80' },
  { label: t('detox.phase2'), pct: 78, color: 'var(--brand-500)' },
  { label: t('detox.phase3'), pct: 52, color: 'var(--sap-400)' },
  { label: t('detox.phase4'), pct: 28, color: 'rgba(255,255,255,.3)' },
])

const vitals = computed(() => [
  { val: '72', unit: 'bpm', lbl: t('detox.vitals') },
  { val: '36.6', unit: '°C', lbl: t('detox.temp') },
  { val: '3/3', unit: '', lbl: t('detox.meds') },
  { val: '24/7', unit: '', lbl: t('detox.monitoring') },
])

const detoxItems = computed(() => [
  { q: t('detox.q1'), a: t('detox.a1') },
  { q: t('detox.q2'), a: t('detox.a2') },
  { q: t('detox.q3'), a: t('detox.a3') },
  { q: t('detox.q4'), a: t('detox.a4') },
  { q: t('detox.q5'), a: t('detox.a5') },
  { q: t('detox.q6'), a: t('detox.a6') },
])

const openIdx = ref<number | null>(null)
</script>
