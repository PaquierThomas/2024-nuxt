// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // load a google font across all pages
    head: {
      title: "Nuxt 3 app",
      link: [
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap",
        },
      ],
    },
  },
  devtools: { enabled: true },
  // Remove default nuxt prefixes for components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxtjs/prismic", "@pinia/nuxt"],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  css: ["@/scss/main.scss"],
  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/scss/foundations/_variables.scss"; @import "@/scss/foundations/_mixins.scss";`,
        },
      },
    },
  },
});
