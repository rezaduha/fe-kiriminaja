// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  ssr: false,
  alias: {
    "@": resolve(__dirname, "/")
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    }
  },
  css: [
    "~/assets/css/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'tailwindcss/nesting': {},
      'postcss-nested': false,
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
})
