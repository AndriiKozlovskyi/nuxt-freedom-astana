<template>
  <section class="section-sm" id="certificates">
    <div class="container">
      <div class="cert-card reveal">
        <div class="cert-left">
          <h2 class="cert-title font-display">{{ t('certificates.title') }}</h2>
          <button class="btn btn-ghost cert-btn" @click="openGallery">
            {{ t('certificates.button') }}
          </button>
          <div class="cert-phone-block">
            <a href="tel:+77788100900" class="cert-phone">{{ t('certificates.phone') }}</a>
            <span class="cert-phone-sub">{{ t('certificates.phoneSub') }}</span>
          </div>
        </div>
        <div class="cert-right">
          <img :src="certImg" :alt="t('certificates.title')" class="cert-img" @click="openGallery" />
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="showModal" class="cert-modal-overlay" @click="showModal = false">
      <div class="cert-modal" @click.stop>
        <button class="cert-modal-close" @click="showModal = false">✕</button>
        <button class="cert-arrow cert-arrow-left" @click="prev">‹</button>
        <img :src="certImages[current]" :alt="`Certificate ${current + 1}`" class="cert-modal-img" />
        <button class="cert-arrow cert-arrow-right" @click="next">›</button>
        <div class="cert-counter">{{ current + 1 }} / {{ certImages.length }}</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import certImg from '~/assets/images/certificate/certificate.png'

const { t } = useI18n()

const certModules = import.meta.glob('../assets/images/certificate/certificates/*.{jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>

const certImages = Object.entries(certModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/certificate(\d+)/)?.[1] ?? '0')
    const numB = parseInt(b.match(/certificate(\d+)/)?.[1] ?? '0')
    return numA - numB
  })
  .map(([, src]) => src)

const showModal = ref(false)
const current = ref(0)

const prev = () => { current.value = (current.value - 1 + certImages.length) % certImages.length }
const next = () => { current.value = (current.value + 1) % certImages.length }

const openGallery = () => {
  current.value = 0
  showModal.value = true
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!showModal.value) return
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'Escape') showModal.value = false
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
