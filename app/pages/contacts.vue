<script setup lang="ts">
const seo = {
  title: "Контакты ТрудягиН в Перми: телефон, адрес, график работы",
  description: `ТрудягиН: ${site.phoneLabel}, ${site.city}, ${site.street}. Грузчики, переезды и перевозки круглосуточно. Обслуживаем Пермь и Пермский край.`,
};

usePageSeo({
  ...seo,
  path: "/contacts",
  schema: (siteUrl) => createContactsPageSchema(siteUrl, seo),
});

const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(`${site.city}, ${site.street}`)}`;
</script>

<template>
  <section class="section page-head contact-page">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <NuxtLink to="/">Главная</NuxtLink>
      <span aria-current="page">Контакты</span>
    </nav>
    <div class="section-head">
      <h1>Контакты ТрудягиН в Перми</h1>
      <p class="page-lead">{{ site.regionalTerms }}</p>
    </div>
    <div class="contact-layout">
      <div>
        <dl class="contact-details">
          <div>
            <dt>Телефон</dt>
            <dd><a class="text-link" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a></dd>
          </div>
          <div>
            <dt>Адрес</dt>
            <dd><address>{{ site.region }}, {{ site.city }}, {{ site.street }}</address></dd>
          </div>
          <div>
            <dt>График работы</dt>
            <dd>{{ site.hours }}</dd>
          </div>
          <div>
            <dt>Территория обслуживания</dt>
            <dd>{{ site.serviceArea }}</dd>
          </div>
        </dl>
        <div class="hero-actions">
          <a class="btn btn-primary" :href="`tel:${site.phone}`">Позвонить</a>
          <a class="btn btn-outline" :href="mapUrl" target="_blank" rel="noopener noreferrer">Адрес на карте</a>
        </div>
        <div class="contact-messengers"><MessengerLinks /></div>
      </div>
      <img src="/images/5.png" alt="Газели ТрудягиН для переездов и перевозок по Перми и Пермскому краю"
        width="1672" height="941" class="contact-image" />
    </div>
  </section>
  <section class="section contact-services">
    <div class="section-head">
      <h2>Заказать услуги</h2>
      <p>Назовите адреса, этажи и объем груза. Согласуем состав бригады, транспорт и цену до выезда.</p>
      <NuxtLink class="text-link" to="/ceny">Цены на услуги</NuxtLink>
    </div>
    <ServiceGrid :items="popularServices" />
  </section>
</template>

<style scoped>
.contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px; align-items: start; }
.contact-details { margin: 0 0 24px; }
.contact-details > div { padding: 14px 0; border-bottom: 1px solid var(--line); }
.contact-details dt { color: var(--muted); font-size: 14px; }
.contact-details dd { margin: 6px 0 0; font-size: 18px; overflow-wrap: anywhere; }
.contact-details address { font-style: normal; }
.contact-image { width: 100%; height: auto; aspect-ratio: 1672 / 941; }
.contact-messengers { margin-top: 20px; }
.contact-services { padding-top: 0; }
.contact-page h1 { font-size: 40px; line-height: 1.1; overflow-wrap: anywhere; }
@media (max-width: 860px) { .contact-layout { grid-template-columns: minmax(0, 1fr); } }
@media (max-width: 560px) { .contact-page h1 { font-size: 32px; } }
</style>
