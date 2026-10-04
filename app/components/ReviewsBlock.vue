<script setup lang="ts">
const props = defineProps<{ slug?: string }>();

const items = pickReviews(props.slug);
const { avito, profi } = platformStats;
</script>

<template>
  <section class="section testimonials" id="reviews" aria-labelledby="reviews-title">
    <div class="section-head">
      <p class="eyebrow">Отзывы</p>
      <h2 id="reviews-title">Что говорят клиенты</h2>
      <p>
        На Авито — рейтинг {{ avito.rating }} и {{ avito.reviewCount }} отзывов, из них
        {{ avito.clientReviewsLabel }} от клиентов. На Профи.ру — рейтинг {{ profi.rating }}.
        Ниже — несколько отзывов дословно, остальные можно прочитать на площадках.
      </p>
    </div>
    <ul class="stats">
      <li>
        <strong>{{ avito.rating }}</strong>
        <span>рейтинг на Авито, {{ avito.badges }}</span>
      </li>
      <li>
        <strong>{{ avito.reviewCount }}</strong>
        <span>отзывов на Авито, {{ avito.fiveStarCount }} из них — с оценкой 5</span>
      </li>
      <li>
        <strong>с {{ avito.sinceYear }}</strong>
        <span>года на Авито, на Профи.ру — с {{ profi.since }}</span>
      </li>
      <li>
        <strong>24/7</strong>
        <span>на связи круглосуточно, без праздников</span>
      </li>
    </ul>
    <div class="testimonial-grid">
      <article v-for="review in items" :key="review.author + review.date" class="testimonial-card">
        <div class="rating" role="img" :aria-label="`Оценка ${review.rating} из 5`">{{ "★".repeat(review.rating) }}</div>
        <p class="testimonial-text">{{ review.text }}</p>
        <div class="testimonial-author">
          <strong>{{ review.author }}</strong>
          <span>{{ review.service }} · <time :datetime="review.date">{{ formatReviewDate(review.date) }}</time></span>
          <a class="card-link" :href="review.sourceUrl" target="_blank" rel="noopener nofollow">
            Отзыв на {{ review.source }}
          </a>
        </div>
      </article>
    </div>
    <div class="review-sources">
      <p>Остальные отзывы — на площадках:</p>
      <a class="platform-link" :href="site.avitoUrl" target="_blank" rel="noopener">
        <strong>Авито</strong>
        <span class="platform-rating"><span aria-hidden="true">★</span> {{ avito.rating }}</span>
        <span>{{ avito.reviewCount }} отзывов</span>
      </a>
      <a class="platform-link" :href="site.profiUrl" target="_blank" rel="noopener">
        <strong>Профи.ру</strong>
        <span class="platform-rating"><span aria-hidden="true">★</span> {{ profi.rating }}</span>
        <span>{{ profi.reviewCount }} отзыва</span>
      </a>
    </div>
  </section>
</template>
