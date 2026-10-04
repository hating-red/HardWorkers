<script setup lang="ts">
const route = useRoute();
const { siteUrl } = useRuntimeConfig().public;

const service = services.find((item) => item.slug === route.params.slug);

if (!service) {
  throw createError({ statusCode: 404, statusMessage: "Страница не найдена", fatal: true });
}

// Шесть карточек ровно заполняют сетку 3×2; остальные услуги — по ссылке «Все услуги»
const others = services.filter((item) => item.slug !== service.slug).slice(0, 6);

useSeoMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  ogTitle: service.metaTitle,
  ogDescription: service.metaDescription,
  ogImage: siteUrl + service.image,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(createServicePageSchema(siteUrl, service)),
    },
  ],
});
</script>

<template>
  <section class="hero hero-compact">
    <div class="hero-media" aria-hidden="true">
      <img :src="service.image" alt="" v-bind="imageSize(service.image)" fetchpriority="high" />
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <nav class="breadcrumbs" aria-label="Хлебные крошки">
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/uslugi">Услуги</NuxtLink>
        <span aria-current="page">{{ service.title }}</span>
      </nav>
      <h1>{{ service.h1 }}</h1>
      <p class="hero-copy">{{ service.lead }}</p>
      <p v-if="service.priceFrom" class="hero-price">{{ formatPriceFrom(service.priceFrom) }}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" :href="`tel:${site.phone}`">Позвонить</a>
        <a class="btn btn-secondary" href="#lead">Оставить заявку</a>
      </div>
    </div>
  </section>

  <section class="section split">
    <div>
      <p class="eyebrow">Что входит</p>
      <h2>{{ service.title }}: что берем на себя</h2>
      <p>{{ service.short }}</p>
    </div>
    <ul class="check-list check-list-plain">
      <li v-for="item in service.includes" :key="item">{{ item }}</li>
    </ul>
  </section>

  <section v-if="service.prices" class="section prices" id="prices" aria-labelledby="prices-title">
    <div class="section-head">
      <p class="eyebrow">Цены</p>
      <h2 id="prices-title">Сколько стоит: {{ service.title.toLowerCase() }} в Перми</h2>
      <p>
        Цены — как в наших профилях на
        <a class="text-link" :href="site.profiUrl" target="_blank" rel="noopener">Профи.ру</a> и
        <a class="text-link" :href="site.avitoUrl" target="_blank" rel="noopener">Авито</a>.
        Точную стоимость назовем после уточнения адресов, этажей и объема.
        <NuxtLink class="text-link" to="/ceny">Все цены</NuxtLink>
      </p>
    </div>
    <table class="price-table">
      <thead>
        <tr>
          <th scope="col">Услуга</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in service.prices" :key="row.name">
          <th scope="row">{{ row.name }}</th>
          <td>{{ row.price }}</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="band band-stacked">
    <div>
      <p class="eyebrow">Как работаем</p>
      <h2>От заявки до результата</h2>
    </div>
    <ol class="steps">
      <li v-for="(step, index) in workSteps" :key="step.title" class="step-card">
        <span>{{ String(index + 1).padStart(2, "0") }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>

  <ReviewsBlock :slug="service.slug" />

  <LocalSeo :title="`${service.title} в Перми`" :text="service.local.text" :points="service.local.points" />

  <FaqList :items="service.faq" />

  <section class="section related" aria-labelledby="related-title">
    <div class="section-head related-head">
      <div>
        <p class="eyebrow">Другие услуги</p>
        <h2 id="related-title">Что еще можем сделать</h2>
      </div>
      <NuxtLink class="btn btn-outline" to="/uslugi">Все услуги</NuxtLink>
    </div>
    <div class="related-grid">
      <NuxtLink v-for="item in others" :key="item.slug" class="related-card" :to="`/uslugi/${item.slug}`">
        <img :src="item.image" alt="" v-bind="imageSize(item.image)" loading="lazy" />
        <span class="related-body">
          <strong>{{ item.title }}</strong>
          <span>{{ item.short }}</span>
          <b>{{ servicePriceLabel(item) }}</b>
        </span>
      </NuxtLink>
    </div>
  </section>

  <LeadForm :topic="service.title" />
</template>
