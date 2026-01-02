import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  typescript: {
    includeWorkspace: true
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  modules: ['@nuxt/icon', '@nuxtjs/color-mode'],
})