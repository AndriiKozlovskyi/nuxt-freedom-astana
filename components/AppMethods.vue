<template>
  <section id="methods" class="section">
    <div class="container">
      <div class="reveal" style="margin-bottom: 1rem; text-align: center">
        <span class="eyebrow">{{ t('methods.eyebrow') }}</span>
      </div>
      <h2 class="section-title reveal d-1" style="text-align: center; margin-bottom: 1rem">
        <span v-for="(line, i) in t('methods.title').split('\n')" :key="i">{{ line }}<br /></span>
      </h2>
      <p class="reveal d-2" style="font-size: 0.93rem; color: var(--ink-500); line-height: 1.82; font-weight: 300; text-align: center; max-width: 600px; margin: 0 auto 2.5rem">
        {{ t('methods.subtitle') }}
      </p>
      <div class="methods-grid-4col reveal d-3">
        <div v-for="(method, i) in methods" :key="i" class="method-card">
          <div style="font-size: 3rem; margin-bottom: 1rem; text-align: center">{{ method.ico }}</div>
          <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #003D8A">{{ method.title }}</h3>
          <p style="font-size: 0.875rem; line-height: 1.6; margin-bottom: 1rem; color: var(--ink-600); flex: 1">{{ method.desc }}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: auto">
            <span
              v-for="(tag, j) in method.tags"
              :key="j"
              style="display: inline-block; padding: 0.375rem 0.75rem; background-color: var(--primary-50, #f0f9ff); color: var(--primary-600, #0284c7); border-radius: 0.375rem; font-size: 0.75rem; font-weight: 500; white-space: nowrap"
            >{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const methods = computed(() => [
  { ico: '💊', title: t('methods.method1'), desc: t('methods.method1Desc'), tags: [t('methods.method1Tag1')] },
  { ico: '🧠', title: t('methods.method2'), desc: t('methods.method2Desc'), tags: [t('methods.method2Tag1'), t('methods.method2Tag2'), t('methods.method2Tag3'), t('methods.method2Tag4'), t('methods.method2Tag5')] },
  { ico: '🏃', title: t('methods.method3'), desc: t('methods.method3Desc'), tags: [t('methods.method3Tag1'), t('methods.method3Tag2'), t('methods.method3Tag3'), t('methods.method3Tag4'), t('methods.method3Tag5')] },
  { ico: '🎨', title: t('methods.method4'), desc: t('methods.method4Desc'), tags: [t('methods.method4Tag1'), t('methods.method4Tag2'), t('methods.method4Tag3')] },
  { ico: '🎭', title: t('methods.method5'), desc: t('methods.method5Desc'), tags: [t('methods.method5Tag1'), t('methods.method5Tag2'), t('methods.method5Tag3'), t('methods.method5Tag4')] },
  { ico: '💬', title: t('methods.method6'), desc: t('methods.method6Desc'), tags: [t('methods.method6Tag1'), t('methods.method6Tag2'), t('methods.method6Tag3'), t('methods.method6Tag4')] },
  { ico: '🧘', title: t('methods.method7'), desc: t('methods.method7Desc'), tags: [t('methods.method7Tag1'), t('methods.method7Tag2'), t('methods.method7Tag3')] },
  { ico: '🧩', title: t('methods.method8'), desc: t('methods.method8Desc'), tags: [t('methods.method8Tag1'), t('methods.method8Tag2'), t('methods.method8Tag3'), t('methods.method8Tag4')] },
])
</script>

<style>
.methods-grid-4col {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
@media (max-width: 1200px) {
  .methods-grid-4col { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .methods-grid-4col { grid-template-columns: 1fr; }
}
.method-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--card-bg, #ffffff);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
  border: 0.1px solid var(--border-100, #f2e9ca);
}
.method-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
</style>
