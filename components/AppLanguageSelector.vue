<template>
  <div :class="['ls', isVisible ? 'ls--visible' : '']">
    <div class="ls__nav">
      <div class="ls__nav-logo">
        <img class="ls__nav-logo-img" :src="logo" alt="CZM Freedom" />
        <div class="ls__nav-logo-text">CZM Freedom</div>
      </div>
      <div class="ls__nav-menu">
        <ul class="ls__nav-list" role="list">
          <li><a class="ls__nav-link" href="tel:87788100900">тел. +7 778 810 09 00</a></li>
        </ul>
      </div>
      <button
        :class="['ls__hamburger', mobileMenuOpen ? 'ls__hamburger--open' : '']"
        aria-label="Открыть меню"
        :aria-expanded="mobileMenuOpen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span /><span /><span />
      </button>

      <div v-if="mobileMenuOpen" class="ls__mobile-menu">
        <a class="ls__mobile-link" href="tel:87788100900">тел. +7 778 810 09 00</a>
        <div class="ls__mobile-socials">
          <a href="https://instagram.com/czmfreedom?utm_medium=copy_link" target="_blank" rel="nofollow noopener" aria-label="instagram" class="ls__socials-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#000000" />
            </svg>
          </a>
          <a href="https://www.facebook.com/help.addiction.kz/" target="_blank" rel="nofollow noopener" aria-label="facebook" class="ls__socials-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="#000000" />
            </svg>
          </a>
          <a href="https://t.me/CZM_Freedom" target="_blank" rel="nofollow noopener" aria-label="telegram" class="ls__socials-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000" />
            </svg>
          </a>
        </div>
      </div>

      <div class="ls__nav-socials" aria-label="Social media links">
        <a href="https://instagram.com/czmfreedom?utm_medium=copy_link" target="_blank" rel="nofollow noopener" aria-label="instagram" class="ls__socials-link">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#000000" />
          </svg>
        </a>
        <a href="https://www.facebook.com/help.addiction.kz/" target="_blank" rel="nofollow noopener" aria-label="facebook" class="ls__socials-link">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="#000000" />
          </svg>
        </a>
        <a href="https://t.me/CZM_Freedom" target="_blank" rel="nofollow noopener" aria-label="telegram" class="ls__socials-link">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000" />
          </svg>
        </a>
      </div>
    </div>

    <div class="ls__cover">
      <div class="ls__cover-carrier" :style="{ backgroundImage: `url(${friends})` }" />
      <div class="ls__cover-filter" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))" />
      <div class="ls__cover-wrapper">
        <div class="ls__cover-content">
          <div class="ls__cover-uptitle">
            ДОВЕРЬТЕСЬ ПРОФЕССИОНАЛАМ<br /><br />
            <a href="tel:+77788100900">+7 778 810 09 00</a>
          </div>
          <h1 class="ls__cover-title">Бесплатный прием и консультация</h1>
          <div class="ls__cover-buttons">
            <button class="ls__btn" @click="handleLanguageSelect('ru')">
              <span class="ls__btn-text">Русский язык</span>
              <div class="ls__btn-effects-wrap"><div class="ls__btn-effects" /></div>
            </button>
            <button class="ls__btn" @click="handleLanguageSelect('kz')">
              <span class="ls__btn-text">Казахский язык</span>
              <div class="ls__btn-effects-wrap"><div class="ls__btn-effects" /></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="ls__t396">
      <div class="ls__t396-inner">
        <div class="ls__t396-phone"><a href="tel:87788100900">+7 (778) 810 09 00</a></div>
        <div class="ls__t396-address"><a href="https://2gis.kz/astana/geo/70000001059285683" target="_blank" rel="noreferrer noopener">г. Астана, Улица Едил, 20</a></div>
        <div class="ls__t396-twogis"><a href="https://2gis.kz/astana/geo/70000001059285683" target="_blank" rel="noreferrer noopener">(нажмите, чтобы открыть 2ГИС)</a></div>
        <div class="ls__t396-icons">
          <a href="tel:87788100900"><img src="https://static.tildacdn.pro/tild3633-6333-4138-a264-663361613230/logopdf_8.png" alt="Phone" width="50" height="50" /></a>
          <a :href="waUrl" target="_blank" rel="noreferrer noopener"><img src="https://static.tildacdn.pro/tild6162-6535-4562-b636-616564303634/logopdf_9.png" alt="WhatsApp" width="50" height="50" /></a>
          <a href="https://t.me/czm_freedom" target="_blank" rel="noreferrer noopener"><img src="https://static.tildacdn.pro/tild6537-6463-4436-a234-323061326563/logopdf_12.png" alt="Telegram" width="50" height="50" /></a>
          <a href="https://www.instagram.com/czmfreedom" target="_blank" rel="noreferrer noopener"><img src="https://static.tildacdn.pro/tild3530-6563-4563-a131-373232623933/logopdf_10.png" alt="Instagram" width="50" height="50" /></a>
        </div>
      </div>
    </div>

    <div class="ls__t898">
      <div :class="['ls__t898-links', floatOpen ? 'ls__t898-links--open' : '']">
        <a href="tel:87788100900" class="ls__t898-icon-link" target="_blank" rel="nofollow noopener noreferrer">
          <span class="ls__t898-btn-text">Phone</span>
          <div class="ls__t898-svg-wrapper">
            <div class="ls__t898-svg-bg" />
            <svg role="presentation" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50.0089 29H51.618C56.4915 29.0061 61.1633 30.9461 64.6073 34.3938C68.0512 37.8415 69.9856 42.5151 69.9856 47.3879V48.9968C69.9338 49.5699 69.6689 50.1027 69.2433 50.49C68.8177 50.8772 68.2623 51.0908 67.6868 51.0884H67.5029C66.8966 51.0358 66.3359 50.745 65.9437 50.2796C65.5516 49.8143 65.36 49.2124 65.4109 48.6061V47.3879C65.4109 43.7303 63.9578 40.2225 61.3711 37.6362C58.7844 35.0499 55.2761 33.597 51.618 33.597H50.3997C49.79 33.6488 49.1847 33.4563 48.7169 33.0619C48.2492 32.6675 47.9573 32.1035 47.9054 31.4939C47.8536 30.8843 48.0461 30.279 48.4406 29.8114C48.835 29.3437 49.3992 29.0518 50.0089 29Z" fill="#000" />
            </svg>
          </div>
        </a>
        <a :href="waUrl" class="ls__t898-icon-link" target="_blank" rel="nofollow noopener noreferrer">
          <span class="ls__t898-btn-text">WhatsApp</span>
          <div class="ls__t898-svg-wrapper">
            <div class="ls__t898-svg-bg" />
            <svg role="presentation" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 50a25 25 0 100-50 25 25 0 000 50z" fill="#fff" />
              <path d="M26.1 12a12.1 12.1 0 00-10.25 18.53l.29.46-1.22 4.46 4.57-1.2.45.27a12.1 12.1 0 106.16-22.51V12z" fill="#27D061" />
              <path d="M25 0a25 25 0 100 50 25 25 0 000-50z" fill="#27D061" />
            </svg>
          </div>
        </a>
      </div>
      <button type="button" class="ls__t898-toggle" style="background: #4ac380" :aria-label="floatOpen ? 'Закрыть' : 'Открыть контакты'" :aria-expanded="floatOpen" @click="floatOpen = !floatOpen">
        <svg role="presentation" :class="['ls__t898-icon', floatOpen ? 'ls__t898-icon--hidden' : '']" width="35" height="32" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2667 12.6981H23.3667M11.2667 16.4717H23.3667M4.8104 23.5777C2.4311 21.1909 1 18.1215 1 14.7736C1 7.16679 8.38723 1 17.5 1C26.6128 1 34 7.16679 34 14.7736C34 22.3804 26.6128 28.5472 17.5 28.5472C15.6278 28.5472 13.8286 28.2868 12.1511 27.8072L12 27.7925L5.03333 31V23.8219L4.8104 23.5777Z" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
        <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="16" height="16" :class="['ls__t898-icon', !floatOpen ? 'ls__t898-icon--hidden' : '']" viewBox="0 0 23 23">
          <g fill-rule="evenodd">
            <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(-45 11.314 11.314)" fill="#ffffff" />
            <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(45 11.314 11.314)" fill="#ffffff" />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '~/assets/images/language/logo.png'
import friends from '~/assets/images/language/friends.jpg'

const emit = defineEmits<{ 'language-select': [language: string] }>()

const { setLocale } = useI18n()

const isVisible = ref(false)
const floatOpen = ref(false)
const mobileMenuOpen = ref(false)

const waUrl = 'https://api.whatsapp.com/send/?phone=77788100900&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F+%D0%BF%D0%BE+%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8&type=phone_number&app_absent=0'

onMounted(() => {
  isVisible.value = true
})

const handleLanguageSelect = async (language: 'ru' | 'kz') => {
  await setLocale(language)
  setTimeout(() => {
    emit('language-select', language)
  }, 250)
}
</script>

