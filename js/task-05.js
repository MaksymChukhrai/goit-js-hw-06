const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  // Отримуємо поточне значення інпута
  const name = nameInput.value.trim();

  // Оновлюємо текстовий вміст елемента span
  nameOutput.textContent = name || "Anonymous";
});

