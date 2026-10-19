<script setup lang="ts">
const links = site.messengers.filter((messenger) => messenger.url);
</script>

<template>
  <ul v-if="links.length" class="messengers">
    <li v-for="messenger in links" :key="messenger.id">
      <a
        class="messenger-link"
        :class="`messenger-${messenger.id}`"
        :href="messenger.url"
        :aria-label="`Написать в ${messenger.label}`"
        :title="messenger.label"
        target="_blank"
        rel="noopener"
      >
        <svg v-if="messenger.id === 'max'" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 3a9 9 0 1 1-4.300 16.910L4.500 21l.700-3.700A9 9 0 0 1 12 3Zm0 4.700a4.300 4.300 0 1 0 0 8.600 4.300 4.300 0 0 0 0-8.600Z"
          />
        </svg>
        <svg v-else-if="messenger.id === 'vk'" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.790 7.300H4.050c.130 6.240 3.250 9.990 8.720 9.990h.310v-3.570c2.010.200 3.530 1.670 4.140 3.570h2.840c-.780-2.840-2.830-4.410-4.110-5.010 1.280-.740 3.080-2.540 3.510-4.980h-2.580c-.560 1.980-2.220 3.780-3.800 3.950V7.300H10.500v6.920c-1.600-.400-3.620-2.340-3.710-6.920Z"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.300 4.300 3.600 10.750c-.950.370-.940 1.170-.170 1.410l4.290 1.340 1.650 5.070c.200.560.360.770.800.770.440 0 .630-.200.870-.440l2.090-2.030 4.340 3.200c.800.440 1.370.210 1.570-.740l2.850-13.430c.290-1.170-.450-1.700-1.590-1.600Zm-11.900 8.900 9.330-5.890c.450-.270.860-.130.520.170l-7.560 6.830-.290 3.140Z"
          />
        </svg>
      </a>
    </li>
  </ul>
</template>
