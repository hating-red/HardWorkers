globalThis.__timing__.logStart('Load chunks/build/ceny-DjUUKCKf');import { a as useRuntimeConfig, b as useSeoMeta$1, d as useHead$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-BJ9rYYDi.mjs';
import { F as FaqList_default } from './FaqList-DiZ1X6iC.mjs';
import { a as createPricePageSchema, L as LeadForm_default } from './structuredData-BHQgY9eN.mjs';
import { defineComponent, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { f as formatPriceFrom, a as site, s as services, g as generalFaq, b as servicePriceLabel } from '../_/services.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/pages/ceny.vue?vue&type=script&setup=true&lang.ts
var ceny_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ceny",
	__ssrInlineRender: true,
	setup(__props) {
		const { siteUrl } = useRuntimeConfig().public;
		const seo = {
			title: `Цены на грузчиков, переезды и перевозки в Перми ${formatPriceFrom(site.priceFrom)} — ТрудягиН`,
			description: `Прайс-лист ТрудягиН в Перми: грузчики ${formatPriceFrom(site.priceFrom)}, квартирные и офисные переезды, упаковка, вывоз мусора, транспортные услуги. Точную стоимость назовем до выезда.`
		};
		const priced = services.filter((service) => service.prices);
		const onRequest = services.filter((service) => !service.prices);
		const priceFactors = [
			"Объем вещей или груза",
			"Этаж и наличие лифта",
			"Количество грузчиков",
			"Время работы и расстояние между адресами"
		];
		const priceFaq = generalFaq.filter((item) => /стоят|оплатить|организациями/.test(item.question));
		useSeoMeta$1({
			title: seo.title,
			description: seo.description,
			ogTitle: seo.title,
			ogDescription: seo.description,
			ogImage: `${siteUrl}/images/1.png`
		});
		useHead$1({ script: [{
			type: "application/ld+json",
			innerHTML: JSON.stringify(createPricePageSchema(siteUrl, seo, priceFaq))
		}] });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_FaqList = FaqList_default;
			const _component_LeadForm = LeadForm_default;
			_push(`<!--[--><section class="section page-head"><nav class="breadcrumbs" aria-label="Хлебные крошки">`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Главная`);
					else return [createTextVNode("Главная")];
				}),
				_: 1
			}, _parent));
			_push(`<span aria-current="page">Цены</span></nav><div class="section-head"><h1>Цены на услуги в Перми</h1><p class="page-lead"> Работы грузчиков, переезды и упаковка — ${ssrInterpolate(("formatPriceFrom" in _ctx ? _ctx.formatPriceFrom : unref(formatPriceFrom))(("site" in _ctx ? _ctx.site : unref(site)).priceFrom))}. Точную стоимость называем до выезда, после уточнения адресов, этажей и объема. </p></div><div class="price-groups"><!--[-->`);
			ssrRenderList(unref(priced), (service) => {
				_push(`<article class="price-group"${ssrRenderAttr("id", service.slug)}><header><h2>`);
				_push(ssrRenderComponent(_component_NuxtLink, { to: `/uslugi/${service.slug}` }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(service.title)}`);
						else return [createTextVNode(toDisplayString(service.title), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</h2>`);
				if (service.priceFrom || service.priceLabel) _push(`<p class="price-chip">${ssrInterpolate(("servicePriceLabel" in _ctx ? _ctx.servicePriceLabel : unref(servicePriceLabel))(service))}</p>`);
				else _push(`<!---->`);
				_push(`</header><table class="price-table"><thead class="visually-hidden"><tr><th scope="col">Услуга</th><th scope="col">Цена</th></tr></thead><tbody><!--[-->`);
				ssrRenderList(service.prices, (row) => {
					_push(`<tr><th scope="row">${ssrInterpolate(row.name)}</th><td>${ssrInterpolate(row.price)}</td></tr>`);
				});
				_push(`<!--]--></tbody></table>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "card-link",
					to: `/uslugi/${service.slug}`,
					"aria-label": `Подробнее: ${service.title}`
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Подробнее об услуге `);
						else return [createTextVNode(" Подробнее об услуге ")];
					}),
					_: 2
				}, _parent));
				_push(`</article>`);
			});
			_push(`<!--]--><article class="price-group" id="po-zaprosu"><header><h2>Другие услуги</h2></header><table class="price-table"><thead class="visually-hidden"><tr><th scope="col">Услуга</th><th scope="col">Цена</th></tr></thead><tbody><!--[-->`);
			ssrRenderList(unref(onRequest), (service) => {
				_push(`<tr><th scope="row">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "text-link",
					to: `/uslugi/${service.slug}`
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(service.title)}`);
						else return [createTextVNode(toDisplayString(service.title), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</th><td>по запросу</td></tr>`);
			});
			_push(`<!--]--></tbody></table></article></div><p class="price-note"> Цены — как в наших профилях на <a class="text-link"${ssrRenderAttr("href", ("site" in _ctx ? _ctx.site : unref(site)).profiUrl)} target="_blank" rel="noopener">Профи.ру</a> и <a class="text-link"${ssrRenderAttr("href", ("site" in _ctx ? _ctx.site : unref(site)).avitoUrl)} target="_blank" rel="noopener">Авито</a>. Оплата наличным или безналичным расчетом; для юрлиц — договор, счет и закрывающие документы. </p></section><section class="section split price-factors"><div><p class="eyebrow">Из чего складывается цена</p><h2>Назовем стоимость до выезда</h2><p> Расскажите, что и куда нужно перевезти, — посчитаем по телефону. Цену обговариваем заранее. </p><div class="hero-actions"><a class="btn btn-primary"${ssrRenderAttr("href", `tel:${("site" in _ctx ? _ctx.site : unref(site)).phone}`)}>Позвонить</a><a class="btn btn-outline" href="#lead">Оставить заявку</a></div></div><ul class="check-list check-list-plain"><!--[-->`);
			ssrRenderList(priceFactors, (factor) => {
				_push(`<li>${ssrInterpolate(factor)}</li>`);
			});
			_push(`<!--]--></ul></section>`);
			_push(ssrRenderComponent(_component_FaqList, {
				items: unref(priceFaq),
				title: "Вопросы о ценах"
			}, null, _parent));
			_push(ssrRenderComponent(_component_LeadForm, { topic: "Расчет стоимости" }, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region app/pages/ceny.vue
var _sfc_setup = ceny_vue_vue_type_script_setup_true_lang_default.setup;
ceny_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ceny.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ceny_default = ceny_vue_vue_type_script_setup_true_lang_default;

export { ceny_default as default };;globalThis.__timing__.logEnd('Load chunks/build/ceny-DjUUKCKf');
//# sourceMappingURL=ceny-DjUUKCKf.mjs.map
