// Pobranie elementów
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = event.currentTarget.value;
  }
});
