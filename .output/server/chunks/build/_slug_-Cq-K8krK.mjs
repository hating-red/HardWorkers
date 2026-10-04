globalThis.__timing__.logStart('Load chunks/build/_slug_-Cq-K8krK');import { u as useRoute$1, a as useRuntimeConfig, c as createError$1, b as useSeoMeta$1, d as useHead$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-BJ9rYYDi.mjs';
import { F as FaqList_default } from './FaqList-DiZ1X6iC.mjs';
import { c as createServicePageSchema, L as LeadForm_default } from './structuredData-BHQgY9eN.mjs';
import { R as ReviewsBlock_default } from './ReviewsBlock-Bt8jg0Vl.mjs';
import { L as LocalSeo_default } from './LocalSeo-Ct1fzu8Y.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { s as services, i as imageSize, f as formatPriceFrom, a as site, w as workSteps, b as servicePriceLabel } from '../_/services.mjs';
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

//#region app/pages/uslugi/[slug].vue?vue&type=script&setup=true&lang.ts
var _slug__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[slug]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const { siteUrl } = useRuntimeConfig().public;
		const service = services.find((item) => item.slug === route.params.slug);
		if (!service) throw createError$1({
			statusCode: 404,
			statusMessage: "Страница не найдена",
			fatal: true
		});
		const others = services.filter((item) => item.slug !== service.slug).slice(0, 6);
		useSeoMeta$1({
			title: service.metaTitle,
			description: service.metaDescription,
			ogTitle: service.metaTitle,
			ogDescription: service.metaDescription,
			ogImage: siteUrl + service.image
		});
		useHead$1({ script: [{
			type: "application/ld+json",
			innerHTML: JSON.stringify(createServicePageSchema(siteUrl, service))
		}] });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ReviewsBlock = ReviewsBlock_default;
			const _component_LocalSeo = LocalSeo_default;
			const _component_FaqList = FaqList_default;
			const _component_LeadForm = LeadForm_default;
			_push(`<!--[--><section class="hero hero-compact"><div class="hero-media" aria-hidden="true"><img${ssrRenderAttrs(mergeProps({
				src: unref(service).image,
				alt: ""
			}, ("imageSize" in _ctx ? _ctx.imageSize : unref(imageSize))(unref(service).image), { fetchpriority: "high" }))}></div><div class="hero-overlay"></div><div class="hero-content"><nav class="breadcrumbs" aria-label="Хлебные крошки">`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Главная`);
					else return [createTextVNode("Главная")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/uslugi" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Услуги`);
					else return [createTextVNode("Услуги")];
				}),
				_: 1
			}, _parent));
			_push(`<span aria-current="page">${ssrInterpolate(unref(service).title)}</span></nav><h1>${ssrInterpolate(unref(service).h1)}</h1><p class="hero-copy">${ssrInterpolate(unref(service).lead)}</p>`);
			if (unref(service).priceFrom) _push(`<p class="hero-price">${ssrInterpolate(("formatPriceFrom" in _ctx ? _ctx.formatPriceFrom : unref(formatPriceFrom))(unref(service).priceFrom))}</p>`);
			else _push(`<!---->`);
			_push(`<div class="hero-actions"><a class="btn btn-primary"${ssrRenderAttr("href", `tel:${("site" in _ctx ? _ctx.site : unref(site)).phone}`)}>Позвонить</a><a class="btn btn-secondary" href="#lead">Оставить заявку</a></div></div></section><section class="section split"><div><p class="eyebrow">Что входит</p><h2>${ssrInterpolate(unref(service).title)}: что берем на себя</h2><p>${ssrInterpolate(unref(service).short)}</p></div><ul class="check-list check-list-plain"><!--[-->`);
			ssrRenderList(unref(service).includes, (item) => {
				_push(`<li>${ssrInterpolate(item)}</li>`);
			});
			_push(`<!--]--></ul></section>`);
			if (unref(service).prices) {
				_push(`<section class="section prices" id="prices" aria-labelledby="prices-title"><div class="section-head"><p class="eyebrow">Цены</p><h2 id="prices-title">Сколько стоит: ${ssrInterpolate(unref(service).title.toLowerCase())} в Перми</h2><p> Цены — как в наших профилях на <a class="text-link"${ssrRenderAttr("href", ("site" in _ctx ? _ctx.site : unref(site)).profiUrl)} target="_blank" rel="noopener">Профи.ру</a> и <a class="text-link"${ssrRenderAttr("href", ("site" in _ctx ? _ctx.site : unref(site)).avitoUrl)} target="_blank" rel="noopener">Авито</a>. Точную стоимость назовем после уточнения адресов, этажей и объема. `);
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "text-link",
					to: "/ceny"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Все цены`);
						else return [createTextVNode("Все цены")];
					}),
					_: 1
				}, _parent));
				_push(`</p></div><table class="price-table"><thead><tr><th scope="col">Услуга</th><th scope="col">Цена</th></tr></thead><tbody><!--[-->`);
				ssrRenderList(unref(service).prices, (row) => {
					_push(`<tr><th scope="row">${ssrInterpolate(row.name)}</th><td>${ssrInterpolate(row.price)}</td></tr>`);
				});
				_push(`<!--]--></tbody></table></section>`);
			} else _push(`<!---->`);
			_push(`<section class="band band-stacked"><div><p class="eyebrow">Как работаем</p><h2>От заявки до результата</h2></div><ol class="steps"><!--[-->`);
			ssrRenderList("workSteps" in _ctx ? _ctx.workSteps : unref(workSteps), (step, index) => {
				_push(`<li class="step-card"><span>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><h3>${ssrInterpolate(step.title)}</h3><p>${ssrInterpolate(step.text)}</p></li>`);
			});
			_push(`<!--]--></ol></section>`);
			_push(ssrRenderComponent(_component_ReviewsBlock, { slug: unref(service).slug }, null, _parent));
			_push(ssrRenderComponent(_component_LocalSeo, {
				title: `${unref(service).title} в Перми`,
				text: unref(service).local.text,
				points: unref(service).local.points
			}, null, _parent));
			_push(ssrRenderComponent(_component_FaqList, { items: unref(service).faq }, null, _parent));
			_push(`<section class="section related" aria-labelledby="related-title"><div class="section-head related-head"><div><p class="eyebrow">Другие услуги</p><h2 id="related-title">Что еще можем сделать</h2></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				class: "btn btn-outline",
				to: "/uslugi"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Все услуги`);
					else return [createTextVNode("Все услуги")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="related-grid"><!--[-->`);
			ssrRenderList(unref(others), (item) => {
				_push(ssrRenderComponent(_component_NuxtLink, {
					key: item.slug,
					class: "related-card",
					to: `/uslugi/${item.slug}`
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<img${ssrRenderAttrs(mergeProps({
							src: item.image,
							alt: ""
						}, { ref_for: true }, ("imageSize" in _ctx ? _ctx.imageSize : unref(imageSize))(item.image), { loading: "lazy" }))}${_scopeId}><span class="related-body"${_scopeId}><strong${_scopeId}>${ssrInterpolate(item.title)}</strong><span${_scopeId}>${ssrInterpolate(item.short)}</span><b${_scopeId}>${ssrInterpolate(("servicePriceLabel" in _ctx ? _ctx.servicePriceLabel : unref(servicePriceLabel))(item))}</b></span>`);
						else return [createVNode("img", mergeProps({
							src: item.image,
							alt: ""
						}, { ref_for: true }, ("imageSize" in _ctx ? _ctx.imageSize : unref(imageSize))(item.image), { loading: "lazy" }), null, 16, ["src"]), createVNode("span", { class: "related-body" }, [
							createVNode("strong", null, toDisplayString(item.title), 1),
							createVNode("span", null, toDisplayString(item.short), 1),
							createVNode("b", null, toDisplayString(("servicePriceLabel" in _ctx ? _ctx.servicePriceLabel : unref(servicePriceLabel))(item)), 1)
						])];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></section>`);
			_push(ssrRenderComponent(_component_LeadForm, { topic: unref(service).title }, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region app/pages/uslugi/[slug].vue
var _sfc_setup = _slug__vue_vue_type_script_setup_true_lang_default.setup;
_slug__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/uslugi/[slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _slug__default = _slug__vue_vue_type_script_setup_true_lang_default;

export { _slug__default as default };;globalThis.__timing__.logEnd('Load chunks/build/_slug_-Cq-K8krK');
//# sourceMappingURL=_slug_-Cq-K8krK.mjs.map
