import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "7AOFh7O3qr2fImEVzTlbw59OI4K-UYmolty8VZ8DW0k",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL,
    public: {
      authorId: process.env.AUTHOR_ID,
    },
  },
  icon: {
    mode: "css",
    cssLayer: "base",
    serverBundle: {
      collections: ["ph", "simple-icons"],
    },
  },
  typescript: {
    includeWorkspace: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
    storageKey: "nuxt-color-mode",
  },
  supabase: {
    redirect: false,
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
  },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://withalx.com",
    name: "Miftakhussurur Al Maliki",
    description:
      "Portfolio of Miftakhussurur Al Maliki, a Frontend Developer crafting solid, intuitive web experiences.",
    defaultLocale: "en",
  },
  sitemap: {
    sources: ["/api/sitemap"],
  },
});