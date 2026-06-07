export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/language-selector.css',
    '~/assets/css/stats.css',
  ],
  i18n: {
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'kz', name: 'Қазақша', file: 'kz.json' },
    ],
    lazy: true,
    defaultLocale: 'ru',
    langDir: './locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },
})
