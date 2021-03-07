export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Petani Milenial Juara - Pemerintah Provinsi Jawa Barat',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jadilah penentu kemajuan pertanian masa depan melalui inovasi dan pemanfaatan teknologi digital. Kamu bisa jadi wajah baru pertanian modern Jawa Barat yang mandiri, produktif, dan berkelanjutan.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/stylesheet/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    display: 'swap',
    prefetch: true,
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      Lato: [100, 300, 400, 700, 900],
      Lora: [400, 500, 600, 700]
    }
  },

  eslint: {
    fix: true
  },

  googleAnalytics: {
    id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID // Use as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID
    },
    selectionResultDocumentUrl: process.env.NUXT_ENV_URL_DOK_HASIL_SELEKSI
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['vue-scrollto/nuxt', {
      duration: 1000,
      easing: 'ease',
      offset: 0
    }],
    'nuxt-lazy-load'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
