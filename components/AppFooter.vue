<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-name">
            <span class="text-gold">CZM </span>FREEDOM
          </div>
          <div class="footer-brand-sub">{{ t('footer.brandSub') }}</div>
          <p class="footer-brand-desc">{{ t('footer.brandDesc') }}</p>
        </div>
        <div>
          <div class="footer-col-title">{{ t('footer.aboutTitle') }}</div>
          <ul class="footer-links">
            <li><a href="#about" class="footer-link">{{ t('footer.link1') }}</a></li>
            <li><a href="#team" class="footer-link">{{ t('footer.link2') }}</a></li>
            <li><a href="#contact" class="footer-link">{{ t('footer.link3') }}</a></li>
            <li><a href="#contact" class="footer-link">{{ t('footer.link4') }}</a></li>
            <li><a href="#faq" class="footer-link">{{ t('footer.link5') }}</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">{{ t('footer.servicesTitle') }}</div>
          <ul class="footer-links">
            <li><a href="#services" class="footer-link">{{ t('footer.link6') }}</a></li>
            <li><a href="#services" class="footer-link">{{ t('footer.link7') }}</a></li>
            <li><a href="#services" class="footer-link">{{ t('footer.link8') }}</a></li>
            <li><a href="#services" class="footer-link">{{ t('footer.link10') }}</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">{{ t('footer.contactsTitle') }}</div>
          <a href="tel:+77788100900" class="footer-phone">+7 778 810 09 00</a>
          <div class="footer-addr">г. Астана, Улица Едил, 20</div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">{{ t('footer.copy') }}</span>
        <span class="footer-tag">{{ t('footer.tag') }}</span>
        <small class="footer-powered">
          <a class="text-black/20 flex flex-row" href="https://evola-tec.com" target="_blank">
            <p>Powered by <strong>Evola</strong></p>
            <div class="text-[#004275]/20 font-bold">Tec</div>
          </a>
        </small>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
