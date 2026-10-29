// Заявка с сайта уходит сообщением от бота в MAX: https://dev.max.ru/docs-api/methods/POST/messages
// Сертификат API выдан Минцифры — Node должен доверять ему (NODE_EXTRA_CA_CERTS, см. Dockerfile)
const MAX_API_URL = "https://platform-api2.max.ru/messages";

// Не больше 5 заявок за 10 минут с одного IP — защита от случайных повторов и простого спама
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const recentByIp = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  for (const [key, times] of recentByIp) {
    if (times.every((time) => now - time > RATE_WINDOW_MS)) recentByIp.delete(key);
  }
  const times = (recentByIp.get(ip) ?? []).filter((time) => now - time <= RATE_WINDOW_MS);
  if (times.length >= RATE_LIMIT) return true;
  recentByIp.set(ip, [...times, now]);
  return false;
};

const field = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export default defineEventHandler(async (event) => {
  const body = await readBody<Record<string, unknown> | null>(event);
  if (!body || typeof body !== "object") {
    throw createError({ statusCode: 400, statusMessage: "Invalid request" });
  }

  // Скрытое поле заполняют только боты: отвечаем успехом, но никуда не отправляем
  if (field(body.website, 200)) return { ok: true };

  const phone = field(body.phone, 40);
  if (phone.replace(/\D/g, "").length < 10) {
    throw createError({ statusCode: 400, statusMessage: "Invalid phone" });
  }
  if (body.consent !== true) {
    throw createError({ statusCode: 400, statusMessage: "Consent required" });
  }

  if (isRateLimited(getRequestIP(event, { xForwardedFor: true }) ?? "unknown")) {
    throw createError({ statusCode: 429, statusMessage: "Too many requests" });
  }

  const { maxBotToken, maxChatId, maxUserId } = useRuntimeConfig(event);
  if (!maxBotToken || !(maxChatId || maxUserId)) {
    console.error("Lead delivery is not configured: set NUXT_MAX_BOT_TOKEN and NUXT_MAX_USER_ID or NUXT_MAX_CHAT_ID");
    throw createError({ statusCode: 503, statusMessage: "Lead delivery is not configured" });
  }

  const topic = field(body.topic, 100);
  const name = field(body.name, 100);
  const task = field(body.task, 2000);
  const text = [
    `Заявка с сайта ${site.name}`,
    topic ? `Услуга: ${topic}` : null,
    name ? `Имя: ${name}` : null,
    `Телефон: ${phone}`,
    task ? `Задача: ${task}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await $fetch(MAX_API_URL, {
      method: "POST",
      query: maxChatId ? { chat_id: maxChatId } : { user_id: maxUserId },
      headers: { Authorization: String(maxBotToken) },
      body: { text },
      timeout: 10_000,
    });
  } catch (error) {
    console.error("Lead delivery to MAX failed", error);
    throw createError({ statusCode: 502, statusMessage: "Lead delivery failed" });
  }

  return { ok: true };
});
