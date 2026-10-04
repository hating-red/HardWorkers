<script setup lang="ts">
const props = defineProps<{ topic?: string }>();

const name = ref("");
const phone = ref("");
const task = ref("");
const note = ref("Форма подготовит текст обращения. Отправку подключим после выбора канала.");
const phoneError = ref("");
const phoneInput = ref<HTMLInputElement>();

async function submit() {
  if (phone.value.replace(/\D/g, "").length < 10) {
    phoneError.value = "Укажите номер полностью, например +7 964 123-45-67";
    phoneInput.value?.focus();
    return;
  }
  phoneError.value = "";

  const message = [
    `Заявка с сайта ${site.name}`,
    props.topic ? `Услуга: ${props.topic}` : null,
    name.value.trim() ? `Имя: ${name.value.trim()}` : null,
    `Телефон: ${phone.value.trim()}`,
    task.value.trim() ? `Задача: ${task.value.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await navigator.clipboard.writeText(message);
    note.value =
      "Текст заявки скопирован. Теперь можно отправить его в Telegram или мессенджер клиенту.";
  } catch {
    note.value =
      "Заявка подготовлена. Подключим отправку в Telegram, WhatsApp или CRM отдельным шагом.";
  }
}
</script>

<template>
  <section class="cta" id="lead">
    <div>
      <p class="eyebrow">Заявка</p>
      <h2>Расскажите, что нужно перевезти</h2>
      <p>Мы уточним адреса, этажи, объем вещей, количество грузчиков и предложим ближайшее время.</p>
    </div>
    <form class="lead-form" novalidate @submit.prevent="submit">
      <label>
        Имя
        <input v-model="name" name="name" type="text" placeholder="Например, Анна…" autocomplete="name" />
      </label>
      <label>
        Телефон
        <input
          ref="phoneInput"
          v-model="phone"
          name="phone"
          type="tel"
          inputmode="tel"
          placeholder="+7 964 123-45-67…"
          autocomplete="tel"
          required
          :aria-invalid="!!phoneError"
          aria-describedby="phone-error"
        />
        <span id="phone-error" class="field-error" role="alert">{{ phoneError }}</span>
      </label>
      <label>
        Что нужно
        <textarea v-model="task" name="task" rows="4" placeholder="Переезд, грузчики, эвакуатор, упаковка…" autocomplete="off"></textarea>
      </label>
      <button class="btn btn-primary" type="submit">Подготовить заявку</button>
      <p class="form-note" aria-live="polite">{{ note }}</p>
    </form>
  </section>
</template>
