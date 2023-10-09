const selectedBodyColor = document.querySelector("body");

const selectedColor = document.querySelector(".color");
console.log(selectedColor);

const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomHexColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

  selectedColor.textContent = randomHexColor;
  selectedBodyColor.style.backgroundColor = randomHexColor;
}
