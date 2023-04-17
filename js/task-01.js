const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

// Кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Ітерація по кожному елементу li.item і вивід даних
categoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const totalElements = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${totalElements}`);
});

