//Task # 1

const listOfCategories = document.querySelectorAll("li.item");
const numberOfCategories = listOfCategories.length;
console.log(`Number of categories:`, numberOfCategories);

listOfCategories.forEach((listOfCategory) => {
  const nameHeader = listOfCategory.querySelector("h2");
  const elements = listOfCategory.querySelectorAll("ul li");
  const numberOfElements = elements.length;

  console.log(`Category:`, nameHeader.textContent);
  console.log(`Elements:`, numberOfElements);
});
