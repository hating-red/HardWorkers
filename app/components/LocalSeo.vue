<script setup lang="ts">
defineProps<{ title: string; text: string; points: string[] }>();
</script>

<template>
  <section class="section split local-seo" aria-labelledby="local-seo-title">
    <div>
      <p class="eyebrow">{{ site.serviceArea }}</p>
      <h2 id="local-seo-title">{{ title }}</h2>
      <p>{{ text }}</p>
      <p>{{ site.regionalTerms }}</p>
      <NuxtLink class="text-link" to="/contacts">Контакты и график работы</NuxtLink>
    </div>
    <ul class="check-list check-list-plain">
      <li v-for="point in points" :key="point">{{ point }}</li>
    </ul>
  </section>
</template>
