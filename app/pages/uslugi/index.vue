<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public;

const seo = {
  title: "Услуги: переезды, грузчики, перевозки и вывоз мусора в Перми — ТрудягиН",
  description: `Все услуги ТрудягиН в Перми: транспортные услуги, грузчики на час, квартирные и офисные переезды, упаковка, вывоз мусора, экспедирование и эвакуатор. ${formatPriceFrom(site.priceFrom)}.`,
};

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogImage: `${siteUrl}/images/1.png`,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(createServicesPageSchema(siteUrl, seo)),
    },
  ],
});
</script>

<template>
  <section class="section page-head">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <NuxtLink to="/">Главная</NuxtLink>
      <span aria-current="page">Услуги</span>
    </nav>
    <div class="section-head">
      <h1>Услуги в Перми</h1>
      <p class="page-lead">
        Транспорт, грузчики, переезды, упаковка, вывоз мусора и эвакуатор по всей Перми —
        {{ formatPriceFrom(site.priceFrom) }}. Работаем с физлицами и юрлицами.
      </p>
    </div>
    <ServiceGrid :items="services" heading-tag="h2" />
  </section>

  <ReviewsBlock />

  <LeadForm />
</template>
