globalThis.__timing__.logStart('Load chunks/build/uslugi-Cz_nvIwN');import { a as useRuntimeConfig, b as useSeoMeta$1, d as useHead$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-BJ9rYYDi.mjs';
import { b as createServicesPageSchema, L as LeadForm_default } from './structuredData-BHQgY9eN.mjs';
import { S as ServiceGrid_default } from './ServiceGrid-t9Ra_Umc.mjs';
import { R as ReviewsBlock_default } from './ReviewsBlock-Bt8jg0Vl.mjs';
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { f as formatPriceFrom, a as site, s as services } from '../_/services.mjs';
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

//#region app/pages/uslugi/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { siteUrl } = useRuntimeConfig().public;
		const seo = {
			title: "Услуги: переезды, грузчики, перевозки и вывоз мусора в Перми — ТрудягиН",
			description: `Все услуги ТрудягиН в Перми: транспортные услуги, грузчики на час, квартирные и офисные переезды, упаковка, вывоз мусора, экспедирование и эвакуатор. ${formatPriceFrom(site.priceFrom)}.`
		};
		useSeoMeta$1({
			title: seo.title,
			description: seo.description,
			ogTitle: seo.title,
			ogDescription: seo.description,
			ogImage: `${siteUrl}/images/1.png`
		});
		useHead$1({ script: [{
			type: "application/ld+json",
			innerHTML: JSON.stringify(createServicesPageSchema(siteUrl, seo))
		}] });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ServiceGrid = ServiceGrid_default;
			const _component_ReviewsBlock = ReviewsBlock_default;
			const _component_LeadForm = LeadForm_default;
			_push(`<!--[--><section class="section page-head"><nav class="breadcrumbs" aria-label="Хлебные крошки">`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Главная`);
					else return [createTextVNode("Главная")];
				}),
				_: 1
			}, _parent));
			_push(`<span aria-current="page">Услуги</span></nav><div class="section-head"><h1>Услуги в Перми</h1><p class="page-lead"> Транспорт, грузчики, переезды, упаковка, вывоз мусора и эвакуатор по всей Перми — ${ssrInterpolate(("formatPriceFrom" in _ctx ? _ctx.formatPriceFrom : unref(formatPriceFrom))(("site" in _ctx ? _ctx.site : unref(site)).priceFrom))}. Работаем с физлицами и юрлицами. </p></div>`);
			_push(ssrRenderComponent(_component_ServiceGrid, {
				items: "services" in _ctx ? _ctx.services : unref(services),
				"heading-tag": "h2"
			}, null, _parent));
			_push(`</section>`);
			_push(ssrRenderComponent(_component_ReviewsBlock, null, null, _parent));
			_push(ssrRenderComponent(_component_LeadForm, null, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region app/pages/uslugi/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/uslugi/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var uslugi_default = index_vue_vue_type_script_setup_true_lang_default;

export { uslugi_default as default };;globalThis.__timing__.logEnd('Load chunks/build/uslugi-Cz_nvIwN');
//# sourceMappingURL=uslugi-Cz_nvIwN.mjs.map
