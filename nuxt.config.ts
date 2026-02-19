export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  target: 'static',
  nitro: {
    preset: 'static',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    ['nuxt-gtag',
      {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    ],
    [
      'nuxt-microcms-module',
      {
        serviceDomain: process.env.MICRO_CMS_DOMAIN,
        apiKey: process.env.MICRO_CMS_API_KEY,
        target: 'server'
      },
    ]
  ],
  css: ['~/assets/scss/main.scss'],
  
  runtimeConfig: {
    public: {
      googleFormUrl: process.env.GOOGLE_FORM_URL,
      googleFormEntryName: process.env.GOOGLE_FORM_ENTRY_NAME,
      googleFormEntryEmail: process.env.GOOGLE_FORM_ENTRY_EMAIL,
      googleFormEntryComment: process.env.GOOGLE_FORM_ENTRY_COMMENT
    }
  }
});