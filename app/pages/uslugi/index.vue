<script setup lang="ts">
const seo = {
  title: "Услуги грузчиков и перевозки в Перми — ТрудягиН",
  description: "Услуги ТрудягиН в Перми и Пермском крае: грузчики, Газель, квартирные и офисные переезды, упаковка, вывоз мусора, экспедирование и эвакуатор. Работаем 24/7.",
};

usePageSeo({
  ...seo,
  path: "/uslugi",
  schema: (siteUrl) => createServicesPageSchema(siteUrl, seo),
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
        Выезды по Пермскому краю согласуем по маршруту и времени подачи.
      </p>
    </div>
    <ServiceGrid :items="services" heading-tag="h2" />
    <CallCta title="Не нашли свою задачу в списке?" text="Позвоните — подскажем и назовем цену." />
  </section>

  <ReviewsBlock />

  <LeadForm />
</template>
