// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Deny Ramanda Liu",
      meta: [
        {
          name: "description",
          content:
            "I’m senior front-end developer with over 9 years of experience building production-ready web applications for media, startups, and enterprise environments. I specialize in transforming complex requirements into clean, scalable, and maintainable interfaces, while ensuring performance, accessibility, and strong visual quality.",
        },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon"],
  css: ["swiper/css", "swiper/css/navigation", "swiper/css/pagination"],
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId:
        process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
    },
  },
  googleFonts: {
    families: {
      Lora: [400, 600, 700],
      "PT Sans": [400, 700],
      "Bebas Neue": [400],
      "Smooch Sans": [400, 600, 700],
      Poppins: [400, 600, 700],
    },
    display: "swap",
    preload: true,
    download: true, // ⬅️ recommended (self-host)
  },
});
