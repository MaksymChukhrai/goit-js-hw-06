const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Получаем элемент списка, в который будем добавлять новые элементы
const ul = document.querySelector("#ingredients");

// Используем цикл, чтобы создать новый элемент li для каждого названия
for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li"); // Создаем новый элемент li
  li.textContent = ingredients[i]; // Задаем текст элемента
  li.classList.add("item"); // Добавляем класс элементу
  ul.appendChild(li); // Добавляем элемент в список
}
