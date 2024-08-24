// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      baseApiUrl: "https://itunes.apple.com",
    },
  },
  srcDir: "src/",
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
  ],
  css: [
    "~/assets/styles/scss/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  tailwindcss: {
    cssPath: "~/assets/styles/css/tailwind.css",
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
  routeRules: {
    "/": {
      redirect: "/home",
    },
  },
});
