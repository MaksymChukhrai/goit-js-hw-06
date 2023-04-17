const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.children;

// Кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Ітерація по кожному елементу li.item і вивід даних
Array.from(categoriesItems).forEach((item) => {
  const title = item.firstElementChild.textContent;
  const totalElements = item.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${totalElements}`);
});


