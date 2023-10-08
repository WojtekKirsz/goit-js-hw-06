// Pobranie elementów
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

// Wyświetlenie elementów w consoli
console.log(inputName);
console.log(outputName);

inputName.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value;
});
