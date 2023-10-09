// Pobranie elementów

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

// Wyświetlenie elementów w consoli
console.log(decrementButton);
console.log(incrementButton);
console.log(valueSpan);

let counterValue = 0;

// valueSpan.textContent = counterValue;
// console.log(counterValue);

// Zmniejszanie o 1
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
  console.log(counterValue);
});

// Zwiększanie o 1
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
  console.log(counterValue);
});
