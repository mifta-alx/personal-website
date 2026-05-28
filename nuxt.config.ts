import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'google-site-verification', content: '7AOFh7O3qr2fImEVzTlbw59OI4K-UYmolty8VZ8DW0k' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  nitro: {
    preset: 'vercel'
  }, 
  experimental: {
    payloadExtraction: false
  },
  runtimeConfig: {
    discordWebhookUrl:process.env.DISCORD_WEBHOOK_URL,
    public: {
      authorId: process.env.AUTHOR_ID,
    }
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    serverBundle: {
      collections: ['solar']
    }
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
  supabase: {
    redirect: false,
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/supabase'
  ],
})