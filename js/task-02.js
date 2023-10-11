const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. Method with forEach

// const listOfIngredients = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add("item");
//   listOfIngredients.append(ingredientItem);
// });

// 2. Method with map

const ingredientsArr = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
});

const listOfIngredients = document.getElementById("ingredients");

listOfIngredients.append(...ingredientsArr);
