const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

// Кількість категорій
console.log(`В списку ${categoriesItems.length} категорії.`);

// Ітерація по кожному елементу li.item і вивід даних
categoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const totalElements = item.querySelectorAll("li").length;
  console.log(`- Категорія: ${title} (кількість елементів: ${totalElements})`);
});
