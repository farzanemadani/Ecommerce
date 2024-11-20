// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fa-IR',
        dir: 'rtl'
      },
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel:'apple-touch-icon', href: '/favicon.png' ,sizes:'180x180'}
      ],
      
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
        // { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }
        // {
        //   name: 'robots',
        //   content:
        //     'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        // },
      ]
    }
  },
  modules: ['nuxt-mdi', '@nuxt/image', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'http://62.106.95.16/api'
    }
  },
})