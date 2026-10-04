<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public;

const seo = {
  title: `Цены на грузчиков, переезды и перевозки в Перми ${formatPriceFrom(site.priceFrom)} — ТрудягиН`,
  description: `Прайс-лист ТрудягиН в Перми: грузчики ${formatPriceFrom(site.priceFrom)}, квартирные и офисные переезды, упаковка, вывоз мусора, транспортные услуги. Точную стоимость назовем до выезда.`,
};

const priced = services.filter((service) => service.prices);
const onRequest = services.filter((service) => !service.prices);

const priceFactors = [
  "Объем вещей или груза",
  "Этаж и наличие лифта",
  "Количество грузчиков",
  "Время работы и расстояние между адресами",
];

const priceFaq = generalFaq.filter((item) => /стоят|оплатить|организациями/.test(item.question));

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
      innerHTML: JSON.stringify(createPricePageSchema(siteUrl, seo, priceFaq)),
    },
  ],
});
</script>

<template>
  <section class="section page-head">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <NuxtLink to="/">Главная</NuxtLink>
      <span aria-current="page">Цены</span>
    </nav>
    <div class="section-head">
      <h1>Цены на услуги в Перми</h1>
      <p class="page-lead">
        Работы грузчиков, переезды и упаковка — {{ formatPriceFrom(site.priceFrom) }}.
        Точную стоимость называем до выезда, после уточнения адресов, этажей и объема.
      </p>
    </div>

    <div class="price-groups">
      <article v-for="service in priced" :key="service.slug" class="price-group" :id="service.slug">
        <header>
          <h2>
            <NuxtLink :to="`/uslugi/${service.slug}`">{{ service.title }}</NuxtLink>
          </h2>
          <p v-if="service.priceFrom || service.priceLabel" class="price-chip">{{ servicePriceLabel(service) }}</p>
        </header>
        <table class="price-table">
          <thead class="visually-hidden">
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
        <NuxtLink class="card-link" :to="`/uslugi/${service.slug}`" :aria-label="`Подробнее: ${service.title}`">
          Подробнее об услуге
        </NuxtLink>
      </article>

      <article class="price-group" id="po-zaprosu">
        <header>
          <h2>Другие услуги</h2>
        </header>
        <table class="price-table">
          <thead class="visually-hidden">
            <tr>
              <th scope="col">Услуга</th>
              <th scope="col">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="service in onRequest" :key="service.slug">
              <th scope="row">
                <NuxtLink class="text-link" :to="`/uslugi/${service.slug}`">{{ service.title }}</NuxtLink>
              </th>
              <td>по запросу</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>

    <p class="price-note">
      Цены — как в наших профилях на
      <a class="text-link" :href="site.profiUrl" target="_blank" rel="noopener">Профи.ру</a> и
      <a class="text-link" :href="site.avitoUrl" target="_blank" rel="noopener">Авито</a>.
      Оплата наличным или безналичным расчетом; для юрлиц — договор, счет и закрывающие документы.
    </p>
  </section>

  <section class="section split price-factors">
    <div>
      <p class="eyebrow">Из чего складывается цена</p>
      <h2>Назовем стоимость до выезда</h2>
      <p>
        Расскажите, что и куда нужно перевезти, — посчитаем по телефону. Цену обговариваем заранее.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" :href="`tel:${site.phone}`">Позвонить</a>
        <a class="btn btn-outline" href="#lead">Оставить заявку</a>
      </div>
    </div>
    <ul class="check-list check-list-plain">
      <li v-for="factor in priceFactors" :key="factor">{{ factor }}</li>
    </ul>
  </section>

  <FaqList :items="priceFaq" title="Вопросы о ценах" />

  <LeadForm topic="Расчет стоимости" />
</template>
