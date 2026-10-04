<script setup lang="ts">
defineProps<{ title: string; text: string; points: string[] }>();
</script>

<template>
  <section class="section split local-seo" aria-labelledby="local-seo-title">
    <div>
      <p class="eyebrow">Работаем по Перми</p>
      <h2 id="local-seo-title">{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
    <ul class="check-list check-list-plain">
      <li v-for="point in points" :key="point">{{ point }}</li>
    </ul>
  </section>
</template>
