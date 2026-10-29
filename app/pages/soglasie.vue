<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public;
const { operator } = site;

useSeoMeta({
  title: "Согласие на обработку персональных данных — ТрудягиН",
  description: "Текст согласия на обработку персональных данных, которое дается при отправке заявки на сайте ТрудягиН.",
  robots: "noindex, follow",
});

useHead({ link: [{ key: "canonical", rel: "canonical", href: `${siteUrl}/soglasie` }] });
</script>

<template>
  <section class="section page-head legal">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <NuxtLink to="/">Главная</NuxtLink>
      <span aria-current="page">Согласие на обработку персональных данных</span>
    </nav>
    <h1>Согласие на обработку персональных данных</h1>

    <p>
      Отправляя заявку на сайте {{ siteUrl }}, я свободно, своей волей и в своем интересе даю согласие
      {{ operator.name }}<template v-if="operator.inn"> (ИНН {{ operator.inn }})</template>, адрес: {{ site.region }},
      {{ site.city }}, {{ site.street }}, — на обработку моих персональных данных на следующих условиях.
    </p>

    <h2>Какие данные</h2>
    <p>Имя, номер телефона и сведения, которые я указал в описании задачи.</p>

    <h2>Цели</h2>
    <p>Обработка заявки, обратный звонок, расчет стоимости, заключение и исполнение договора на оказание услуг.</p>

    <h2>Действия с данными</h2>
    <p>
      Сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование,
      передача (предоставление, доступ), блокирование, удаление и уничтожение — с использованием
      средств автоматизации и без них. Данные передаются оператору через мессенджер MAX.
    </p>

    <h2>Срок</h2>
    <p>
      Согласие действует до достижения целей обработки или до его отзыва. Отозвать согласие можно,
      позвонив по номеру <a class="text-link" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a><template v-if="operator.email">
      или написав на <a class="text-link" :href="`mailto:${operator.email}`">{{ operator.email }}</a></template>.
    </p>

    <p>
      Порядок обработки описан в
      <NuxtLink class="text-link" to="/politika">политике обработки персональных данных</NuxtLink>.
    </p>
  </section>
</template>
