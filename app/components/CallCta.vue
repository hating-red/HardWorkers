<script setup lang="ts">
defineProps<{ title: string; text: string }>();
</script>

<template>
  <aside class="call-cta">
    <div>
      <strong>{{ title }}</strong>
      <p>{{ text }}</p>
    </div>
    <a class="btn btn-primary" :href="`tel:${site.phone}`">Позвонить {{ site.phoneLabel }}</a>
  </aside>
</template>
