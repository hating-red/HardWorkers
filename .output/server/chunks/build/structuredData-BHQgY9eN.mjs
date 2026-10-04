globalThis.__timing__.logStart('Load chunks/build/structuredData-BHQgY9eN');import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as site, s as services, f as formatPriceFrom, g as generalFaq } from '../_/services.mjs';

const reviews = [
  {
    author: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439",
    date: "2026-06-05",
    service: "\u0413\u0430\u0437\u0435\u043B\u044C \u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438",
    text: "\u041E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u0441 \u043F\u0435\u0440\u0435\u0435\u0437\u0434\u043E\u043C, \u0441\u0440\u0430\u0437\u0443 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438\u0441\u044C. \u0417\u0430\u043A\u0430\u0437\u0430\u043B \u0433\u0430\u0437\u0435\u043B\u044C \u0438 \u0434\u0432\u0443\u0445 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432. \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u044B\u043B\u0438 \u0432 \u043D\u0443\u0436\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u041F\u0430\u0440\u043D\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u0440\u0430\u0441\u0430\u0432\u0446\u044B, \u043A\u0430\u043A\u0438\u0435 \u0442\u043E \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u0442\u043E\u0440\u044B. \u0413\u0440\u0443\u0437\u044F\u0442 \u0431\u044B\u0441\u0442\u0440\u043E, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u043E\u0432\u0440\u0435\u0434\u0438\u043B\u0438, \u043D\u0435 \u0441\u043B\u043E\u043C\u0430\u043B\u0438. \u041E\u0447\u0435\u043D\u044C \u0434\u043E\u0432\u043E\u043B\u0435\u043D \u0442\u0430\u043A\u0438\u043C \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u043C.",
    rating: 5,
    source: "\u0410\u0432\u0438\u0442\u043E",
    sourceUrl: site.avitoUrl,
    slugs: ["transportnye-uslugi", "kvartirnyy-pereezd", "gruzchiki"]
  },
  {
    author: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F",
    date: "2025-07-09",
    service: "\u041F\u0435\u0440\u0435\u0435\u0437\u0434",
    text: "\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043E \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0435 \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0435\u0437\u0434\u0435 \u0431\u044B\u043B\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0430 \u043D\u0430 \u0432\u044B\u0441\u0448\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u{1F44D} \u043F\u0440\u0438\u0435\u0445\u0430\u043B\u0438 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0451\u043D\u043D\u043E\u0441\u0442\u0438, \u043C\u0430\u0448\u0438\u043D\u0430 \u0447\u0438\u0441\u0442\u0430\u044F, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0441\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0441\u043B\u0430\u0436\u0435\u043D\u043D\u043E, \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E)) \u0432\u0441\u0435\u043C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E.",
    rating: 5,
    source: "\u0410\u0432\u0438\u0442\u043E",
    sourceUrl: site.avitoUrl,
    slugs: ["kvartirnyy-pereezd", "transportnye-uslugi"]
  },
  {
    author: "\u0410\u043D\u0434\u0440\u0435\u0439",
    date: "2025-09-11",
    service: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438",
    text: "\u041F\u0440\u0438\u044F\u0442\u043D\u044B\u0435 \u0438 \u043F\u0443\u043D\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438, \u043E\u0447\u0435\u043D\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B\u0438 \u0441\u0432\u043E\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0438 \u043F\u043E\u043C\u043E\u0433\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0442\u0438 \u0434\u0438\u0432\u0430\u043D. \u041E\u0431\u0440\u0430\u0449\u0443\u0441\u044C \u0441\u043D\u043E\u0432\u0430 \u{1F44D}\u{1F3FC}",
    rating: 5,
    source: "\u0410\u0432\u0438\u0442\u043E",
    sourceUrl: site.avitoUrl,
    slugs: ["gruzchiki", "kvartirnyy-pereezd"]
  },
  {
    author: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430",
    date: "2025-08-06",
    service: "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430",
    text: "\u0412\u0441\u0435 \u043E\u0442\u043B\u0438\u0447\u043D\u043E! \u0411\u044B\u0441\u0442\u0440\u043E \u043E\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u043D\u0430 \u043F\u0440\u043E\u0441\u044C\u0431\u0443, \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043C\u043E\u0433\u043B\u0438 \u0441 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u043E\u0439, \u043D\u043E \u0438 \u0441 \u0440\u0430\u0437\u0431\u043E\u0440\u043E\u043C \u043C\u0435\u0431\u0435\u043B\u0438 \u0438 \u0435\u0435 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u043E\u0439! \u0421\u043F\u0430\u0441\u0438\u0431\u043E!",
    rating: 5,
    source: "\u0410\u0432\u0438\u0442\u043E",
    sourceUrl: site.avitoUrl,
    slugs: ["upakovka", "kvartirnyy-pereezd"]
  },
  {
    author: "\u041B\u0438\u043D\u0430",
    date: "2025-07-11",
    service: "\u0413\u0430\u0437\u0435\u043B\u044C \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0435\u0437\u0434\u0430",
    text: "\u0417\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u043B\u0438 \u0433\u0430\u0437\u0435\u043B\u044C \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0435\u0437\u0434\u0430.\n\u0423\u0441\u043B\u0443\u0433\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u0430 \u043D\u0430 \u0432\u044B\u0441\u0448\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u0435. \u041F\u0440\u0438\u0435\u0445\u0430\u043B \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043A \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u043E\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u041F\u043E\u043C\u043E\u0433\u0430\u043B \u043F\u0440\u0438 \u043F\u043E\u0433\u0440\u0443\u0437\u043A\u0435 \u0438 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0435. \u0421\u043F\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C \u0431\u044B\u0441\u0442\u0440\u043E. \u041D\u0430\u0440\u0435\u043A\u0430\u043D\u0438\u0439 \u043D\u0435\u0442. \u041F\u0440\u0438 \u043F\u043E\u0435\u0437\u0434\u043A\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043B\u043E.\n\u041E\u0447\u0435\u043D\u044C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E!",
    rating: 5,
    source: "\u0410\u0432\u0438\u0442\u043E",
    sourceUrl: site.avitoUrl,
    slugs: ["transportnye-uslugi", "kvartirnyy-pereezd"]
  },
  {
    author: "\u0418\u0440\u0438\u043D\u0430",
    date: "2025-05-12",
    service: "\u0420\u0430\u0437\u0431\u043E\u0440\u043A\u0430 \u043C\u0435\u0431\u0435\u043B\u0438 \u0438 \u0432\u044B\u0432\u043E\u0437 \u043C\u0443\u0441\u043E\u0440\u0430",
    text: "\u0411\u043E\u043B\u044C\u0448\u043E\u0435 \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0440\u0435\u0431\u044F\u0442\u0430\u043C))) \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u043B\u0438 \u0441\u0442\u0430\u0440\u0443\u044E \u043C\u0435\u0431\u0435\u043B\u044C \u0438 \u0432\u044B\u0432\u0435\u0437\u043B\u0438 \u0432\u0435\u0441\u044C \u043C\u0443\u0441\u043E\u0440 \u043E\u0447\u0435\u043D\u044C \u0431\u044B\u0441\u0442\u0440\u043E) \u043E\u043F\u043B\u0430\u0442\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043B\u0430\u0441\u044C \u043F\u043E \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0451\u043D\u043D\u043E\u0439 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u0446\u0435\u043D\u0435",
    rating: 5,
    source: "\u0410\u0432\u0438\u0442\u043E",
    sourceUrl: site.avitoUrl,
    slugs: ["vyvoz-musora"]
  },
  {
    author: "\u0420\u0443\u0441\u043B\u0430\u043D",
    date: "2025-01-14",
    service: "\u0420\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0430 \u0438 \u043F\u043E\u0434\u044A\u0435\u043C \u043D\u0430 \u044D\u0442\u0430\u0436",
    text: "\u041E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u0421\u0442\u0430\u043D\u0438\u0441\u043B\u0430\u0432\u0430, \u043F\u0440\u0438\u044F\u0442\u043D\u043E \u043F\u043E\u043E\u0431\u0449\u0430\u043B\u0438\u0441\u044C, \u043E\u0431\u0441\u0443\u0434\u0438\u043B\u0438 \u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0440\u0430\u0437\u0433\u0440\u0443\u0437\u043A\u0438 \u0438 \u043F\u043E\u0434\u043D\u044F\u0442\u0438\u044F \u043C\u0435\u0431\u0435\u043B\u0438 \u043D\u0430 \u044D\u0442\u0430\u0436. \u0420\u0430\u0431\u043E\u0442\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u0431\u0443\u0434\u0443 \u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C )",
    rating: 5,
    source: "\u0410\u0432\u0438\u0442\u043E",
    sourceUrl: site.avitoUrl,
    slugs: ["gruzchiki"]
  },
  {
    author: "\u041D\u0438\u043A\u043E\u043B\u0430\u0439",
    date: "2026-05-31",
    service: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438",
    text: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043F\u043E\u0434\u044A\u0435\u0445\u0430\u043B\u0438 \u0432\u0441\u0435 \u0432\u043E\u0432\u0440\u0435\u043C\u044F\n\u0420\u0430\u0431\u043E\u0442\u0430 \u0431\u044B\u043B\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043E\u043A\u0438.\n\u0421\u043F\u0430\u0441\u0438\u0431\u043E",
    rating: 5,
    source: "\u041F\u0440\u043E\u0444\u0438.\u0440\u0443",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"]
  },
  {
    author: "\u041B\u0435\u043E\u043D\u0438\u0434",
    date: "2026-05-28",
    service: "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u043C\u0435\u0431\u0435\u043B\u0438",
    text: "\u0412\u0441\u0435 \u043E\u0442\u043B\u0438\u0447\u043D\u043E, \u0447\u0435\u0442\u043A\u043E \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u043A\u043E\u0441\u0442\u044B\u043B\u0435\u0439, \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043B \u0434\u0435\u0442\u0430\u043B\u0438. \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0435 \u0432 \u0434\u0438\u0430\u043B\u043E\u0433\u0435, \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u043B\u0438 \u0432\u0441\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0435, \u0432\u0441\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E.",
    rating: 5,
    source: "\u041F\u0440\u043E\u0444\u0438.\u0440\u0443",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"]
  },
  {
    author: "\u0415\u043B\u0435\u043D\u0430",
    date: "2024-11-17",
    service: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438",
    text: "\u043F\u0440\u0438\u0435\u0445\u0430\u043B\u0438 \u0431\u044B\u0441\u0442\u0440\u043E, \u0443\u0441\u043B\u0443\u0433\u0443 \u043E\u043A\u0430\u0437\u0430\u043B\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E. \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E",
    rating: 5,
    source: "\u041F\u0440\u043E\u0444\u0438.\u0440\u0443",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"]
  },
  {
    author: "\u042E\u043B\u0438\u044F",
    date: "2024-03-26",
    service: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438",
    text: "\u0421\u0434\u0435\u043B\u043A\u0430 \u043F\u0440\u043E\u0448\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E.",
    rating: 5,
    source: "\u041F\u0440\u043E\u0444\u0438.\u0440\u0443",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"]
  }
];
const platformStats = {
  avito: {
    rating: "5,0",
    reviewCount: 358,
    fiveStarCount: 354,
    clientReviewsLabel: "\u0431\u043E\u043B\u0435\u0435 300",
    sinceYear: 2012,
    badges: "\u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u044B, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430"
  },
  profi: {
    rating: "5,0",
    reviewCount: 4,
    since: "\u0438\u044E\u043B\u044F 2022"
  }
};
const pickReviews = (slug, limit = 6) => [...reviews].sort((a, b) => {
  const match = Number(!!slug && b.slugs.includes(slug)) - Number(!!slug && a.slugs.includes(slug));
  return match || b.date.localeCompare(a.date);
}).slice(0, limit);
const reviewDate = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC"
});
const formatReviewDate = (date) => reviewDate.format(new Date(date));

//#region app/components/LeadForm.vue?vue&type=script&setup=true&lang.ts
var LeadForm_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "LeadForm",
	__ssrInlineRender: true,
	props: { topic: {} },
	setup(__props) {
		const name = ref("");
		const phone = ref("");
		const task = ref("");
		const note = ref("Форма подготовит текст обращения. Отправку подключим после выбора канала.");
		const phoneError = ref("");
		ref();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "cta",
				id: "lead"
			}, _attrs))}><div><p class="eyebrow">Заявка</p><h2>Расскажите, что нужно перевезти</h2><p>Мы уточним адреса, этажи, объем вещей, количество грузчиков и предложим ближайшее время.</p></div><form class="lead-form" novalidate><label> Имя <input${ssrRenderAttr("value", unref(name))} name="name" type="text" placeholder="Например, Анна…" autocomplete="name"></label><label> Телефон <input${ssrRenderAttr("value", unref(phone))} name="phone" type="tel" inputmode="tel" placeholder="+7 964 123-45-67…" autocomplete="tel" required${ssrRenderAttr("aria-invalid", !!unref(phoneError))} aria-describedby="phone-error"><span id="phone-error" class="field-error" role="alert">${ssrInterpolate(unref(phoneError))}</span></label><label> Что нужно <textarea name="task" rows="4" placeholder="Переезд, грузчики, эвакуатор, упаковка…" autocomplete="off">${ssrInterpolate(unref(task))}</textarea></label><button class="btn btn-primary" type="submit">Подготовить заявку</button><p class="form-note" aria-live="polite">${ssrInterpolate(unref(note))}</p></form></section>`);
		};
	}
});
//#endregion
//#region app/components/LeadForm.vue
var _sfc_setup = LeadForm_vue_vue_type_script_setup_true_lang_default.setup;
LeadForm_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LeadForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var LeadForm_default = Object.assign(LeadForm_vue_vue_type_script_setup_true_lang_default, { __name: "LeadForm" });
//#endregion
//#region app/utils/structuredData.ts
var address = {
	"@type": "PostalAddress",
	streetAddress: site.street,
	addressLocality: "Пермь",
	addressRegion: "Пермский край",
	addressCountry: "RU"
};
var areaServed = {
	"@type": "City",
	name: "Пермь"
};
var businessId = (siteUrl) => `${siteUrl}/#business`;
var websiteId = (siteUrl) => `${siteUrl}/#website`;
var createBusinessSchema = (siteUrl, description) => ({
	"@type": "MovingCompany",
	"@id": businessId(siteUrl),
	name: site.name,
	url: `${siteUrl}/`,
	telephone: site.phone,
	image: `${siteUrl}/images/1.png`,
	priceRange: formatPriceFrom(site.priceFrom),
	description,
	address,
	areaServed,
	openingHoursSpecification: {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		],
		opens: "00:00",
		closes: "23:59"
	},
	paymentAccepted: "Наличные, безналичный расчет",
	sameAs: [site.profiUrl, site.avitoUrl],
	review: reviews.map((review) => ({
		"@type": "Review",
		author: {
			"@type": "Person",
			name: review.author
		},
		datePublished: review.date,
		reviewBody: review.text.replace(/\n/g, " "),
		reviewRating: {
			"@type": "Rating",
			ratingValue: review.rating,
			bestRating: 5,
			worstRating: 1
		},
		publisher: {
			"@type": "Organization",
			name: review.source
		},
		url: review.sourceUrl
	}))
});
var createWebsiteSchema = (siteUrl) => ({
	"@type": "WebSite",
	"@id": websiteId(siteUrl),
	name: site.name,
	url: `${siteUrl}/`,
	inLanguage: "ru-RU",
	publisher: { "@id": businessId(siteUrl) }
});
var createBreadcrumbSchema = (url, items) => ({
	"@type": "BreadcrumbList",
	"@id": `${url}#breadcrumb`,
	itemListElement: items.map((entry, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: entry.name,
		item: entry.item
	}))
});
var createFaqSchema = (url, faq) => ({
	"@type": "FAQPage",
	"@id": `${url}#faq`,
	mainEntity: faq.map((entry) => ({
		"@type": "Question",
		name: entry.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: entry.answer
		}
	}))
});
var createOfferSchema = (url, priceFrom) => ({
	"@type": "Offer",
	url,
	availability: "https://schema.org/InStock",
	priceCurrency: "RUB",
	...priceFrom ? { priceSpecification: {
		"@type": "UnitPriceSpecification",
		minPrice: priceFrom,
		priceCurrency: "RUB",
		unitCode: "HUR",
		unitText: "час"
	} } : {}
});
var createWebPageSchema = (siteUrl, url, seo, about, withBreadcrumb = true) => ({
	"@type": "WebPage",
	"@id": `${url}#webpage`,
	url,
	name: seo.title,
	description: seo.description,
	inLanguage: "ru-RU",
	isPartOf: { "@id": websiteId(siteUrl) },
	about: { "@id": about },
	...withBreadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}
});
var serviceUrl = (siteUrl, service) => `${siteUrl}/uslugi/${service.slug}`;
var createServiceListSchema = (siteUrl, id) => ({
	"@type": "ItemList",
	"@id": id,
	name: `Услуги ${site.name}`,
	itemListElement: services.map((service, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: service.title,
		url: serviceUrl(siteUrl, service)
	}))
});
var createHomePageSchema = (siteUrl, seo) => ({
	"@context": "https://schema.org",
	"@graph": [
		{
			...createBusinessSchema(siteUrl, seo.description),
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: `Услуги ${site.name}`,
				itemListElement: services.map((service) => ({
					...createOfferSchema(serviceUrl(siteUrl, service), service.priceFrom),
					itemOffered: {
						"@type": "Service",
						name: `${service.title} в Перми`,
						url: serviceUrl(siteUrl, service),
						areaServed,
						provider: { "@id": businessId(siteUrl) }
					}
				}))
			}
		},
		createWebsiteSchema(siteUrl),
		createWebPageSchema(siteUrl, `${siteUrl}/`, seo, businessId(siteUrl), false),
		createServiceListSchema(siteUrl, `${siteUrl}/#services`),
		createFaqSchema(`${siteUrl}/`, generalFaq)
	]
});
var createServicesPageSchema = (siteUrl, seo) => {
	const url = `${siteUrl}/uslugi`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			createBusinessSchema(siteUrl, seo.description),
			createWebsiteSchema(siteUrl),
			createWebPageSchema(siteUrl, url, seo, businessId(siteUrl)),
			createServiceListSchema(siteUrl, `${url}#services`),
			createBreadcrumbSchema(url, [{
				name: "Главная",
				item: `${siteUrl}/`
			}, {
				name: "Услуги",
				item: url
			}])
		]
	};
};
var createPricePageSchema = (siteUrl, seo, faq) => {
	const url = `${siteUrl}/ceny`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				...createBusinessSchema(siteUrl, seo.description),
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: `Цены ${site.name}`,
					itemListElement: services.map((service) => ({
						...createOfferSchema(serviceUrl(siteUrl, service), service.priceFrom),
						itemOffered: {
							"@type": "Service",
							name: `${service.title} в Перми`,
							url: serviceUrl(siteUrl, service)
						}
					}))
				}
			},
			createWebsiteSchema(siteUrl),
			createWebPageSchema(siteUrl, url, seo, businessId(siteUrl)),
			createBreadcrumbSchema(url, [{
				name: "Главная",
				item: `${siteUrl}/`
			}, {
				name: "Цены",
				item: url
			}]),
			createFaqSchema(url, faq)
		]
	};
};
var createServicePageSchema = (siteUrl, service) => {
	const url = serviceUrl(siteUrl, service);
	const serviceId = `${url}#service`;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				...createBusinessSchema(siteUrl, service.metaDescription),
				makesOffer: {
					"@type": "Offer",
					url,
					itemOffered: { "@id": serviceId }
				}
			},
			createWebsiteSchema(siteUrl),
			{
				"@type": "Service",
				"@id": serviceId,
				name: service.h1,
				serviceType: service.title,
				description: service.local.text,
				url,
				image: siteUrl + service.image,
				provider: { "@id": businessId(siteUrl) },
				areaServed,
				offers: createOfferSchema(url, service.priceFrom)
			},
			createWebPageSchema(siteUrl, url, {
				title: service.metaTitle,
				description: service.metaDescription
			}, serviceId),
			createBreadcrumbSchema(url, [
				{
					name: "Главная",
					item: `${siteUrl}/`
				},
				{
					name: "Услуги",
					item: `${siteUrl}/uslugi`
				},
				{
					name: service.title,
					item: url
				}
			]),
			createFaqSchema(url, service.faq)
		]
	};
};

export { LeadForm_default as L, createPricePageSchema as a, createServicesPageSchema as b, createServicePageSchema as c, createHomePageSchema as d, platformStats as e, formatReviewDate as f, pickReviews as p };;globalThis.__timing__.logEnd('Load chunks/build/structuredData-BHQgY9eN');
//# sourceMappingURL=structuredData-BHQgY9eN.mjs.map
