<template>
  <section id="cta">
    <div class="cta-card">
      <div class="cta-left">
        <h2 class="cta-title font-display">
          <span v-for="(line, i) in t('cta.title').split('\n')" :key="i">{{ line }}<br /></span>
        </h2>
        <p class="cta-sub">{{ t('cta.subtitle') }}</p>
        <div class="cta-actions">
          <a href="#contact" class="cta-btn-consult">{{ t('cta.cta2') }}</a>
          <div class="cta-phone-block">
            <a href="tel:+77788100900" class="cta-phone-number">{{ t('cta.phone') }}</a>
            <span class="cta-phone-hint">{{ t('cta.phoneHint') }}</span>
          </div>
        </div>
      </div>
      <div class="cta-right">
        <div class="cta-phone-img-wrap">
          <img :src="phoneImg" alt="Phone" class="cta-phone-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import phoneImg from '~/assets/images/contact/phone.jpeg'
const { t } = useI18n()
</script>
