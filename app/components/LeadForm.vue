<script setup lang="ts">
const props = defineProps<{ topic?: string }>();

const name = ref("");
const phone = ref("");
const task = ref("");
const consent = ref(false);
const policy = ref(false);
// Ловушка для ботов: человек это поле не видит и не заполняет
const website = ref("");

const status = ref<"idle" | "sending" | "sent" | "failed">("idle");
const phoneError = ref("");
const consentError = ref("");
const phoneInput = ref<HTMLInputElement>();
const consentInput = ref<HTMLInputElement>();

async function submit() {
  if (phone.value.replace(/\D/g, "").length < 10) {
    phoneError.value = "Укажите номер полностью, например +7 964 123-45-67";
    phoneInput.value?.focus();
    return;
  }
  phoneError.value = "";

  if (!consent.value || !policy.value) {
    consentError.value = "Отметьте оба пункта, чтобы отправить заявку";
    consentInput.value?.focus();
    return;
  }
  consentError.value = "";

  status.value = "sending";
  try {
    await $fetch("/api/lead", {
      method: "POST",
      body: {
        topic: props.topic,
        name: name.value,
        phone: phone.value,
        task: task.value,
        consent: true,
        website: website.value,
      },
    });
    status.value = "sent";
    name.value = "";
    phone.value = "";
    task.value = "";
  } catch {
    status.value = "failed";
  }
}
</script>

<template>
  <section class="cta" id="lead">
    <div>
      <p class="eyebrow">Заявка</p>
      <h2>Расскажите, что нужно перевезти</h2>
      <p>Уточним адреса, этажи и объем, предложим ближайшее время.</p>
    </div>
    <form class="lead-form" novalidate @submit.prevent="submit">
      <label>
        Имя
        <input v-model="name" name="name" type="text" placeholder="Анна" autocomplete="name" maxlength="100" />
      </label>
      <label>
        Телефон
        <input
          ref="phoneInput"
          v-model="phone"
          name="phone"
          type="tel"
          inputmode="tel"
          placeholder="+7 964 123-45-67"
          autocomplete="tel"
          maxlength="40"
          required
          :aria-invalid="!!phoneError"
          aria-describedby="phone-error"
        />
        <span id="phone-error" class="field-error" role="alert">{{ phoneError }}</span>
      </label>
      <label>
        Что нужно
        <textarea v-model="task" name="task" rows="4" placeholder="Переезд, грузчики, эвакуатор, упаковка…" autocomplete="off" maxlength="2000"></textarea>
      </label>
      <div class="form-trap" aria-hidden="true">
        <label>
          Сайт
          <input v-model="website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </label>
      </div>
      <label class="consent">
        <input
          ref="consentInput"
          v-model="consent"
          type="checkbox"
          required
          :aria-invalid="!!consentError && !consent"
          aria-describedby="consent-error"
        />
        <span>
          Даю <NuxtLink class="text-link" to="/soglasie" target="_blank">согласие на обработку персональных данных</NuxtLink>
        </span>
      </label>
      <label class="consent">
        <input
          v-model="policy"
          type="checkbox"
          required
          :aria-invalid="!!consentError && !policy"
          aria-describedby="consent-error"
        />
        <span>
          Ознакомлен с <NuxtLink class="text-link" to="/politika" target="_blank">политикой обработки персональных данных</NuxtLink>
        </span>
      </label>
      <span id="consent-error" class="field-error" role="alert">{{ consentError }}</span>
      <button class="btn btn-primary" type="submit" :disabled="status === 'sending'">
        {{ status === "sending" ? "Отправляем…" : "Отправить заявку" }}
      </button>
      <p class="form-note" aria-live="polite">
        <template v-if="status === 'sent'">Заявка отправлена. Скоро перезвоним.</template>
        <template v-else-if="status === 'failed'">
          Не получилось отправить заявку. Позвоните нам:
          <a class="text-link" :href="`tel:${site.phone}`">{{ site.phoneLabel }}</a>
        </template>
        <template v-else>Перезвоним, уточним детали и назовем цену.</template>
      </p>
    </form>
  </section>
</template>
