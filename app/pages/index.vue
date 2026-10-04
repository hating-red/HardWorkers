<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public;

const seo = {
  title: `ТрудягиН — переезды, грузчики и транспортные услуги в Перми ${formatPriceFrom(site.priceFrom)}`,
  description: `Транспортные услуги, грузчики на час, квартирные и офисные переезды под ключ, вывоз мусора и эвакуатор в Перми. ${formatPriceFrom(site.priceFrom)}. Работаем с физлицами и юрлицами.`,
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
      innerHTML: JSON.stringify(createHomePageSchema(siteUrl, seo)),
    },
  ],
});
</script>

<template>
  <section class="hero">
    <div class="hero-media" aria-hidden="true">
      <img src="/images/1.png" alt="" width="1672" height="941" fetchpriority="high" />
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="eyebrow">Работаем по всей Перми • круглосуточно • физлица и юрлица</p>
      <h1>Квартирный переезд с грузчиками в Перми под ключ</h1>
      <p class="hero-copy">
        Организуем транспорт, погрузку, упаковку, сборку мебели и экспедирование.
        Можно оплатить по расчетному счету, заключить договор и закрывающие документы.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" :href="`tel:${site.phone}`">Позвонить</a>
        <a class="btn btn-secondary" href="#lead">Оставить заявку</a>
      </div>
    </div>
  </section>

  <section class="quick-panel" aria-label="Популярные услуги">
    <article v-for="service in popularServices" :key="service.slug">
      <NuxtLink :to="`/uslugi/${service.slug}`">
        <strong>{{ service.title }}</strong>
        <span>{{ service.short }}</span>
      </NuxtLink>
    </article>
  </section>

  <section class="section" id="services">
    <div class="section-head">
      <p class="eyebrow">Что делаем</p>
      <h2>Берем на себя переезд, доставку и тяжелую работу</h2>
    </div>
    <ServiceGrid :items="services" />
  </section>

  <section class="section fleet" id="fleet" aria-labelledby="fleet-title">
    <div class="fleet-media">
      <img src="/images/5.png" alt="Парк грузовых Газелей ТрудягиН" width="1672" height="941" loading="lazy" />
      <p class="fleet-badge">
        <strong>24/7</strong>
        <span>срочная подача машины</span>
      </p>
    </div>
    <div class="fleet-copy">
      <p class="eyebrow">Парк газелей</p>
      <h2 id="fleet-title">Подберем машину под объем и задачу</h2>
      <p>
        В работе грузовые Газели для квартирных и офисных переездов, перевозки мебели,
        бытовой техники, стройматериалов и коммерческих грузов.
      </p>
      <dl class="fleet-specs">
        <div>
          <dt>Газель под объем</dt>
          <dd>Подберем машину по количеству вещей и задаче.</dd>
        </div>
        <div>
          <dt>Открытая бортовая 4–6 м</dt>
          <dd>Для стройматериалов и крупногабаритных грузов.</dd>
        </div>
        <div>
          <dt>Сразу с грузчиками</dt>
          <dd>Машина приезжает вместе с бригадой: погрузим, закрепим, разгрузим.</dd>
        </div>
        <div>
          <dt>По всей Перми</dt>
          <dd>Чистые, вместительные автомобили. Договор и счет для ИП и юрлиц.</dd>
        </div>
      </dl>
      <div class="hero-actions">
        <NuxtLink class="btn btn-primary" to="/uslugi/transportnye-uslugi">Заказать машину</NuxtLink>
        <a class="btn btn-outline" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a>
      </div>
    </div>
  </section>

  <ReviewsBlock />

  <LocalSeo
    title="Переезды и грузчики в Перми"
    text="ТрудягиН — транспортные услуги, грузчики и переезды под ключ по всей Перми. Подаем Газель с бригадой, упаковываем, разбираем и собираем мебель, вывозим мусор. Работаем круглосуточно, с частными клиентами и организациями, за наличный и безналичный расчет. На Авито с 2012 года: рейтинг 5,0 и 358 отзывов."
    :points="[
      'Грузчики на час и на смену',
      'Газели для переездов, доставки и перевозок',
      'Договор, счет и закрывающие документы для юрлиц',
    ]"
  />

  <FaqList :items="generalFaq" />

  <LeadForm />
</template>
