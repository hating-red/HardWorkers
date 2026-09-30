const leadForm = document.querySelector("#leadForm");
const formNote = document.querySelector("#formNote");

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(leadForm);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const task = String(data.get("task") || "").trim();

  const message = [
    "Заявка с сайта ТрудягиН",
    name ? `Имя: ${name}` : null,
    `Телефон: ${phone}`,
    task ? `Задача: ${task}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  navigator.clipboard
    ?.writeText(message)
    .then(() => {
      formNote.textContent =
        "Текст заявки скопирован. Теперь можно отправить его в Telegram или мессенджер клиенту.";
    })
    .catch(() => {
      formNote.textContent =
        "Заявка подготовлена. Подключим отправку в Telegram, WhatsApp или CRM отдельным шагом.";
    });
});
