<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const notFound = props.error.statusCode === 404;
const title = notFound ? "Страница не найдена" : "Что-то пошло не так";

useSeoMeta({ title: `${title} — ${site.name}`, robots: "noindex" });
</script>

<template>
  <NuxtLayout>
    <section class="section page-head error-page">
      <p class="eyebrow">Ошибка {{ error.statusCode }}</p>
      <h1>{{ title }}</h1>
      <p class="page-lead">
        {{
          notFound
            ? "Возможно, страница переехала. Выберите услугу или позвоните — подскажем."
            : "Обновите страницу или позвоните нам — поможем по телефону."
        }}
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="/">На главную</a>
        <a class="btn btn-outline" href="/uslugi">Все услуги</a>
        <a class="btn btn-outline" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a>
      </div>
    </section>
  </NuxtLayout>
</template>
