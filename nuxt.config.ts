import process from "node:process";
import { indexablePages, isPublicSiteUrl, normalizeSiteUrl } from "./shared/utils/seo";
import { site } from "./shared/utils/services";

const siteUrl = normalizeSiteUrl(process.env.NUXT_PUBLIC_SITE_URL || site.url);

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["@fontsource-variable/onest", "~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      // Переопределяется через NUXT_PUBLIC_SITE_URL
      siteUrl,
      siteIndexable: true,
      // NUXT_PUBLIC_YANDEX_VERIFICATION, NUXT_PUBLIC_GOOGLE_VERIFICATION, NUXT_PUBLIC_METRIKA_ID
      yandexVerification: "",
      googleVerification: "",
      metrikaId: "",
    },
  },

  $production: {
    hooks: {
      "build:before"() {
        if (!isPublicSiteUrl(siteUrl) && process.env.NUXT_PUBLIC_SITE_INDEXABLE !== "false") {
          throw new Error("Set NUXT_PUBLIC_SITE_URL to the production domain before building. For a private preview, set NUXT_PUBLIC_SITE_INDEXABLE=false.");
        }
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      meta: [{ name: "format-detection", content: "telephone=no" }],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },

  // Страницы услуг статичны: отдаем готовый HTML и при `nuxt build`, и при `nuxt generate`
  routeRules: {
    "/": { prerender: true },
    "/uslugi/**": { prerender: true },
    "/ceny": { prerender: true },
    "/contacts": { prerender: true },
    "/api/**": { headers: { "X-Robots-Tag": "noindex, nofollow" } },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
      routes: [...indexablePages().map((page) => page.path), "/sitemap.xml", "/robots.txt"],
    },
  },
});
