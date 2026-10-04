<script setup lang="ts">
defineProps<{ items: Service[]; headingTag?: "h2" | "h3" }>();
</script>

<template>
  <div class="service-grid">
    <article
      v-for="(service, index) in items"
      :key="service.slug"
      class="service-card"
      :class="{ 'service-card-featured': index === 0 }"
    >
      <img
        :src="service.image"
        :alt="service.imageAlt"
        :style="service.imagePosition ? { objectPosition: service.imagePosition } : undefined"
        v-bind="imageSize(service.image)"
        loading="lazy"
      />
      <span>{{ String(index + 1).padStart(2, "0") }}</span>
      <component :is="headingTag ?? 'h3'" class="service-card-title">
        <NuxtLink :to="`/uslugi/${service.slug}`">{{ service.title }}</NuxtLink>
      </component>
      <p>{{ service.short }}</p>
      <NuxtLink class="card-link" :to="`/uslugi/${service.slug}`" :aria-label="`Подробнее: ${service.title}`">
        Подробнее
      </NuxtLink>
    </article>
  </div>
</template>
