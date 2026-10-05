import tailwindcss from "@tailwindcss/vite";
import pkg from "./package.json";

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
      appVersion: pkg.version,
    },
  },
  icon: {
    mode: "svg",
    cssLayer: "base",

    clientBundle: {
      scan: true,
      icons: [
        "ph:sun-fill",
        "ph:moon-fill",
        "ph:sun",
        "ph:moon",
        "ph:envelope",
        "ph:github-logo",
        "ph:linkedin-logo",
        "ph:instagram-logo",
        "ph:tiktok-logo",
        "ph:heart-fill",
        "ph:check-bold",
        "ph:x-bold",
        "ph:caret-down",
        "ph:arrow-up-bold",
        "ph:paper-plane-tilt-fill",
        "ph:copy-fill",
        "ph:check-circle-fill",
        "ph:arrow-square-out",
        "ph:graduation-cap",
        "ph:building-office",
        "simple-icons:nextdotjs",
        "simple-icons:tanstack",
        "simple-icons:nuxt",
        "simple-icons:svelte",
        "simple-icons:laravel",
        "simple-icons:livewire",
        "simple-icons:postgresql",
        "simple-icons:redis",
        "simple-icons:supabase",
        "simple-icons:openai",
        "simple-icons:googlegemini",
        "simple-icons:ollama",
        "simple-icons:tailwindcss",
        "simple-icons:vercel",
        "simple-icons:postman",
        "simple-icons:docker",
        "svg-spinners:ring-resize",
      ],
    },
    serverBundle: {
      collections: ["ph", "simple-icons", "svg-spinners"],
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
    "@nuxt/fonts",
  ],
  fonts: {
    families: [
      { name: "Jetbrains Mono", provider: "google" },
    ],
  },
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
