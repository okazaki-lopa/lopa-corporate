export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
        }
      ]
    }
  },

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
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
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
