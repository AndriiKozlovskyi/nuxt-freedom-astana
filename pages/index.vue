<template>
  <div>
    <AppVideoWidget v-if="!(isMobile && isMobileMenuOpen)" />
    <AppHeader />
    <main>
      <AppHero />
      <AppStats />
      <AppAbout />
      <AppServices />
      <AppCertificates />
      <AppStages />
      <AppMethods />
      <AppDetoxAccordion />
      <AppTeam />
      <AppTestimonials />
      <AppFaq />
      <AppCta />
      <AppContacts />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const isMobile = ref(false)
const isMobileMenuOpen = ref(false)

const revealAll = () => {
  document.body.classList.add('js-ready')
  document.querySelectorAll('.reveal,.reveal-l,.reveal-r,.reveal-s').forEach(el => el.classList.add('show'))
}

const bindPageEffects = () => {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  const handleClick = (e: Event) => {
    const a = e.currentTarget as HTMLAnchorElement
    const id = a.getAttribute('href')!.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  }
  anchors.forEach(a => a.addEventListener('click', handleClick))

  const cards = document.querySelectorAll<HTMLElement>('.srv-card')
  const onMove = (e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `translateY(-14px) scale(1.02) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`
  }
  const onLeave = (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.transform = '' }
  cards.forEach(card => { card.addEventListener('mousemove', onMove); card.addEventListener('mouseleave', onLeave) })

  if (isMobile.value) {
    const menu = document.getElementById('mobileMenu')
    if (menu) {
      const observer = new MutationObserver(() => { isMobileMenuOpen.value = menu.classList.contains('open') })
      observer.observe(menu, { attributes: true, attributeFilter: ['class'] })
      isMobileMenuOpen.value = menu.classList.contains('open')
    }
  }
}

onMounted(() => {
  const checkMobile = () => { isMobile.value = window.innerWidth <= 900 }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  revealAll()
  bindPageEffects()
  return () => window.removeEventListener('resize', checkMobile)
})
</script>
