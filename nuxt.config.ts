// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
})
