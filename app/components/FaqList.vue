<script setup lang="ts">
defineProps<{ items: ServiceFaq[]; title?: string }>();
</script>

<template>
  <section class="section faq-section" id="faq" aria-labelledby="faq-title">
    <div class="section-head">
      <p class="eyebrow">Вопросы</p>
      <h2 id="faq-title">{{ title ?? "Частые вопросы" }}</h2>
      <p>
        Не нашли ответ? Позвоните:
        <a class="text-link" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a>
      </p>
    </div>
    <dl class="faq">
      <div v-for="item in items" :key="item.question" class="faq-item">
        <dt>{{ item.question }}</dt>
        <dd>{{ item.answer }}</dd>
      </div>
    </dl>
  </section>
</template>
