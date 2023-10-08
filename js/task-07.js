const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

console.log(inputRange);
console.log(inputText);
console.log(inputText.textContent);

inputRange.addEventListener("input", () => {
  inputText.style.fontSize = `${inputRange.value}px`;
});
