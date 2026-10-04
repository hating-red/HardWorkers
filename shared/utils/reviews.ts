import { site } from "./services";

export interface Review {
  author: string;
  date: string;
  service: string;
  text: string;
  rating: number;
  source: string;
  sourceUrl: string;
  // Страницы услуг, на которых отзыв показывается в первую очередь
  slugs: string[];
}

// Реальные отзывы из профилей на Авито и Профи.ру, тексты приведены дословно
export const reviews: Review[] = [
  {
    author: "Алексей",
    date: "2026-06-05",
    service: "Газель и грузчики",
    text: "Обратился с переездом, сразу договорились. Заказал газель и двух грузчиков. Все прибыли в нужное время. Парни грузчики просто красавцы, какие то терминаторы. Грузят быстро, качественно, ничего не повредили, не сломали. Очень доволен таким подходом.",
    rating: 5,
    source: "Авито",
    sourceUrl: site.avitoUrl,
    slugs: ["transportnye-uslugi", "kvartirnyy-pereezd", "gruzchiki"],
  },
  {
    author: "Наталья",
    date: "2025-07-09",
    service: "Переезд",
    text: "Услуга по перевозке при переезде была оказана на высшем уровне 👍 приехали по договорённости, машина чистая, сотрудники сработали слаженно, быстро и аккуратно)) всем рекомендую.",
    rating: 5,
    source: "Авито",
    sourceUrl: site.avitoUrl,
    slugs: ["kvartirnyy-pereezd", "transportnye-uslugi"],
  },
  {
    author: "Андрей",
    date: "2025-09-11",
    service: "Грузчики",
    text: "Приятные и пунктуальные грузчики, очень качественно выполнили свою работу и помогли перевезти диван. Обращусь снова 👍🏼",
    rating: 5,
    source: "Авито",
    sourceUrl: site.avitoUrl,
    slugs: ["gruzchiki", "kvartirnyy-pereezd"],
  },
  {
    author: "Екатерина",
    date: "2025-08-06",
    service: "Упаковка и перевозка",
    text: "Все отлично! Быстро отреагировали на просьбу, не только помогли с перевозкой, но и с разбором мебели и ее упаковкой! Спасибо!",
    rating: 5,
    source: "Авито",
    sourceUrl: site.avitoUrl,
    slugs: ["upakovka", "kvartirnyy-pereezd"],
  },
  {
    author: "Лина",
    date: "2025-07-11",
    service: "Газель для переезда",
    text: "Заказывали газель для переезда.\nУслуга оказана на высшем уровне. Приехал водитель к назначенному времени. Помогал при погрузке и выгрузке. Справились быстро. Нареканий нет. При поездке ничего не пострадало.\nОчень рекомендую!",
    rating: 5,
    source: "Авито",
    sourceUrl: site.avitoUrl,
    slugs: ["transportnye-uslugi", "kvartirnyy-pereezd"],
  },
  {
    author: "Ирина",
    date: "2025-05-12",
    service: "Разборка мебели и вывоз мусора",
    text: "Большое спасибо ребятам))) разобрали старую мебель и вывезли весь мусор очень быстро) оплата состоялась по обговорённой заранее цене",
    rating: 5,
    source: "Авито",
    sourceUrl: site.avitoUrl,
    slugs: ["vyvoz-musora"],
  },
  {
    author: "Руслан",
    date: "2025-01-14",
    service: "Разгрузка и подъем на этаж",
    text: "Однозначно рекомендую Станислава, приятно пообщались, обсудили все детали разгрузки и поднятия мебели на этаж. Работа выполнена оперативно и качественно, буду советовать )",
    rating: 5,
    source: "Авито",
    sourceUrl: site.avitoUrl,
    slugs: ["gruzchiki"],
  },
  {
    author: "Николай",
    date: "2026-05-31",
    service: "Грузчики",
    text: "Сотрудники подъехали все вовремя\nРабота была выполнена в кратчайшие сроки.\nСпасибо",
    rating: 5,
    source: "Профи.ру",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"],
  },
  {
    author: "Леонид",
    date: "2026-05-28",
    service: "Перенос мебели",
    text: "Все отлично, четко по времени, без лишних костылей, оперативно согласовал детали. Грузчики приятные в диалоге, соблюдали все правила на объекте, все сделали быстро и аккуратно. Рекомендую.",
    rating: 5,
    source: "Профи.ру",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"],
  },
  {
    author: "Елена",
    date: "2024-11-17",
    service: "Грузчики",
    text: "приехали быстро, услугу оказали качественно. рекомендую",
    rating: 5,
    source: "Профи.ру",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"],
  },
  {
    author: "Юлия",
    date: "2024-03-26",
    service: "Грузчики",
    text: "Сделка прошла успешно.",
    rating: 5,
    source: "Профи.ру",
    sourceUrl: site.profiUrl,
    slugs: ["gruzchiki"],
  },
];

// Данные профилей на 04.10.2026
export const platformStats = {
  avito: {
    rating: "5,0",
    reviewCount: 358,
    fiveStarCount: 354,
    clientReviewsLabel: "более 300",
    sinceYear: 2012,
    badges: "данные подтверждены, компания проверена",
  },
  profi: {
    rating: "5,0",
    reviewCount: 4,
    since: "июля 2022",
  },
};

// Сначала отзывы по услуге страницы, затем остальные; внутри групп — свежие выше
export const pickReviews = (slug?: string, limit = 6) =>
  [...reviews]
    .sort((a, b) => {
      const match = Number(!!slug && b.slugs.includes(slug)) - Number(!!slug && a.slugs.includes(slug));
      return match || b.date.localeCompare(a.date);
    })
    .slice(0, limit);

const reviewDate = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// timeZone зафиксирован, чтобы сервер и браузер отрисовали одну и ту же дату
export const formatReviewDate = (date: string) => reviewDate.format(new Date(date));
