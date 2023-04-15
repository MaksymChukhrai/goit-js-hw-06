const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  // Отримуємо поточне значення інпута
  const name = nameInput.value.trim();

  // Оновлюємо текстовий вміст елемента span
  nameOutput.textContent = name || "Anonymous";
});

// Опис роботи скрипта:

// Отримуємо посилання на елементи <input> та <span> за допомогою методу document.querySelector().
// Навішуємо обробник події input на елементі <input>.
// У функції-обробнику:
// Отримуємо поточне значення інпута за допомогою властивості value та метода trim(), що видаляє зайві пробіли на початку та в кінці рядка.
// Оновлюємо текстовий вміст елемента <span> за допомогою властивості textContent. апис name || 'Anonymous' використовується для того, щоб встановити значення "Anonymous" у випадку, якщо значення змінної name є "falsy" (наприклад, якщо змінна є порожньою рядком).
// Якщо інпут порожній, у спані встановлюється рядок "Anonymous".
