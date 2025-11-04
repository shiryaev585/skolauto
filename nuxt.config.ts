// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "16x16",
                    href: '/favicon-16x16.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "32x32",
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "72x72",
                    href: '/android-chrome-72x72.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "144x144",
                    href: '/android-chrome-144x144.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "192x192",
                    href: '/android-chrome-192x192.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "512x512",
                    href: '/android-chrome-512x512.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "57x57",
                    href: '/apple-icon-57x57.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "144x144",
                    href: '/apple-icon-144x144.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "144x144",
                    href: '/ms-icon-144x144.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: "150x150",
                    href: '/mstile-150x150.png',
                },
                                {
                    rel: 'mask-icon',
                    href: '/safari-pinned-tab.svg',
                    color: '#5bbad5'
                },
                {
                    rel: 'manifest',
                    href: '/site.webmanifest'
                },
            ],
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: '#ffffff' },
                { name: 'msapplication-TileColor', content: '#ffffff' },
                { name: 'msapplication-config', content: '/browserconfig.xml' },
            ],
        },
    },
    css: ['~/assets/style/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/style/global" as *;',
                },
            },
        },
    },
    plugins: [
        '~/plugins/maska.ts',
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
                    },
                },
            },
      ],
      'nuxt-swiper',
      'vue-yandex-maps/nuxt',
    ],
    yandexMaps: {
        apikey: process.env.YMAP_KEY,
    },
    runtimeConfig: {
        public: {
            requestUrl: process.env.REQUEST_URL,
            apiUrl: process.env.API_URL,
        },
    },
});