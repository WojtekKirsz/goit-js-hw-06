const textInput = document.querySelector("#validation-input");
// const textInputValue = textInput.value;
// console.log(textInputValue);
const placeholderValue = textInput.getAttribute("placeholder");
console.log(placeholderValue);

const input = document.querySelector("input");
console.log(input);

// Zdarzenie focus

// textInput.addEventListener("focus", () => {
//   if (textInput.value.length < 6) {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   } else {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   }
// });

// Zdarzenie blur

textInput.addEventListener("blur", () => {
  if (textInput.value.length < 6) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
