// Российский номер без кода страны: 10 цифр. Ведущие 7 или 8 считаем кодом страны,
// поэтому "+7 964…", "8 964…" и "964…" дают одинаковый результат
export const phoneNationalDigits = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return (/^[78]/.test(digits) ? digits.slice(1) : digits).slice(0, 10);
};

export const isValidPhone = (value: string) => phoneNationalDigits(value).length === 10;

// "9641234567" → "+7 964 123-45-67"; неполный номер форматируется по мере ввода
export const formatPhone = (value: string) => {
  const d = phoneNationalDigits(value);
  if (!d) return "";
  let result = `+7 ${d.slice(0, 3)}`;
  if (d.length > 3) result += ` ${d.slice(3, 6)}`;
  if (d.length > 6) result += `-${d.slice(6, 8)}`;
  if (d.length > 8) result += `-${d.slice(8, 10)}`;
  return result;
};
