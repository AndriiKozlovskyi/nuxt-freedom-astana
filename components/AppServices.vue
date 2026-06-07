<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-head">
        <div class="reveal">
          <span class="eyebrow">{{ t('services.eyebrow') }}</span>
        </div>
        <h2 class="section-title reveal d-1">
          <span v-for="(line, i) in t('services.title').split('\n')" :key="i">{{ line }}<br /></span>
        </h2>
        <p class="section-sub reveal d-2">{{ t('services.subtitle') }}</p>
      </div>
      <div class="services-grid">
        <a
          v-for="(service, i) in services"
          :key="i"
          href="https://wa.me/77788100900?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8"
          target="_blank"
          rel="noopener noreferrer"
          :class="['srv-card reveal', `d-${(i % 3) + 1}`]"
        >
          <img :src="service.image" :alt="service.title" class="srv-image" />
          <h3 class="srv-title">{{ service.title }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import alcoholImg from '~/assets/images/services/alcohol.jpg'
import drugsImg from '~/assets/images/services/drugs.jpg'
import mentalImg from '~/assets/images/services/mental.jpg'
import gamblingImg from '~/assets/images/services/gambling.jpg'
import rehabImg from '~/assets/images/services/rehab.jpg'
import homeImg from '~/assets/images/services/home.jpg'

const { t } = useI18n()

const services = computed(() => [
  { image: alcoholImg, title: t('services.alcohol') },
  { image: drugsImg, title: t('services.drugs') },
  { image: mentalImg, title: t('services.gambling') },
  { image: gamblingImg, title: t('services.mental') },
  { image: rehabImg, title: t('services.rehab') },
  { image: homeImg, title: t('services.home') },
])
</script>
