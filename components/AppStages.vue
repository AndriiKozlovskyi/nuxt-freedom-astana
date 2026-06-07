<template>
  <section id="stages" class="section">
    <div class="container" style="position: relative">
      <div class="section-head">
        <div class="reveal">
          <span class="eyebrow" style="color: rgba(249,189,21,.8)">{{ t('stages.eyebrow') }}</span>
        </div>
        <h2 class="section-title on-dark reveal d-1">{{ t('stages.title') }}</h2>
        <p class="section-sub on-dark reveal d-2">{{ t('stages.subtitle') }}</p>
      </div>
      <div class="stages-grid" style="position: relative">
        <div class="stages-line" />
        <div v-for="(stage, i) in stages" :key="i" :class="['stage-card reveal', `d-${i + 1}`]">
          <div class="stage-orb">{{ stage.emoji }}</div>
          <div class="stage-num">{{ stage.num }}</div>
          <div class="stage-title">{{ stage.title }}</div>
          <p class="stage-desc">{{ stage.desc }}</p>
          <span class="stage-dur">{{ stage.dur }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stages = computed(() => [
  { emoji: '🧪', num: '1', title: t('stages.stage1Title'), desc: t('stages.stage1Desc'), dur: t('stages.stage1Dur') },
  { emoji: '🧬', num: '2', title: t('stages.stage2Title'), desc: t('stages.stage2Desc'), dur: t('stages.stage2Dur') },
  { emoji: '🌱', num: '3', title: t('stages.stage3Title'), desc: t('stages.stage3Desc'), dur: t('stages.stage3Dur') },
  { emoji: '♾️', num: '4', title: t('stages.stage4Title'), desc: t('stages.stage4Desc'), dur: t('stages.stage4Dur') },
])
</script>
