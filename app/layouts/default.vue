<script setup lang="ts">
const route = useRoute();
const { siteUrl, yandexVerification, googleVerification, metrikaId } = useRuntimeConfig().public;

useHead({
  link: [{ rel: "canonical", href: () => siteUrl + route.path }],
  meta: [
    { name: "theme-color", content: "#faf8f1" },
    { name: "geo.region", content: "RU-PER" },
    { name: "geo.placename", content: "Пермь" },
    ...(yandexVerification ? [{ name: "yandex-verification", content: yandexVerification }] : []),
    ...(googleVerification ? [{ name: "google-site-verification", content: googleVerification }] : []),
  ],
  script: metrikaId
    ? [
        {
          key: "metrika",
          innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${Number(metrikaId)},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`,
        },
      ]
    : [],
});
useSeoMeta({
  ogSiteName: site.name,
  ogType: "website",
  ogLocale: "ru_RU",
  ogUrl: () => siteUrl + route.path,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <a class="skip-link" href="#top">Перейти к содержимому</a>
  <header class="topbar">
    <NuxtLink class="brand" to="/" :aria-label="site.name">
      <AppLogo />
    </NuxtLink>
    <nav class="nav" aria-label="Основная навигация">
      <NuxtLink to="/uslugi">Услуги</NuxtLink>
      <NuxtLink to="/ceny">Цены</NuxtLink>
      <NuxtLink to="/#fleet">Парк</NuxtLink>
      <NuxtLink to="/#reviews">Отзывы</NuxtLink>
      <a href="#contacts">Контакты</a>
    </nav>
    <a class="phone-link" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a>
  </header>

  <main id="top" tabindex="-1">
    <slot />
  </main>

  <footer class="footer" id="contacts">
    <div>
      <AppLogo class="brand-logo-footer" />
      <span>Грузовые перевозки, переезды, грузчики и эвакуатор в Перми.</span>
      <address>{{ site.city }}, {{ site.street }} · {{ site.hours }}</address>
    </div>
    <nav class="footer-nav" aria-label="Услуги">
      <NuxtLink v-for="service in services" :key="service.slug" :to="`/uslugi/${service.slug}`">
        {{ service.title }}
      </NuxtLink>
      <NuxtLink to="/ceny">Цены</NuxtLink>
    </nav>
    <a class="footer-phone" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a>
  </footer>
</template>
