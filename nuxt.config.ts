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
                    Raleway: {
                        wght: [500, 700],
                    }

                }
            }
        ]],
    runtimeConfig: {
        public: {
            requestUrl: process.env.REQUEST_URL,
            apiUrl: process.env.API_URL,
        }
    },
});
