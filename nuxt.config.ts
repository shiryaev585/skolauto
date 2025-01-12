// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ]
        },
    },
    css: ['~/assets/style/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: '@use "~/assets/style/global" as *;',
                },
            },
        },
    },
    plugins: [
        '~/plugins/maska.js',
    ],
    modules: [
      '@nuxt/image',
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      ['@nuxtjs/google-fonts',
          {
              families: {
                  Lato: {
                      wght: [300, 400],
                  },
                  Oswald: {
                      wght: [300, 400, 500, 700],
                  }

              }
          }
      ],
      'nuxt-swiper',
      'vue-yandex-maps/nuxt'
    ],
    yandexMaps: {
        apikey: process.env.YMAP_KEY,
    },
    runtimeConfig: {
        public: {
            requestUrl: process.env.REQUEST_URL,
            apiUrl: process.env.API_URL,
        }
    },
});