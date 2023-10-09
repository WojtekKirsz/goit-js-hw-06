const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", runForm);

function runForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return console.log("Please fill all the required fields");
  } else {
    const credentials = {
      email: email,
      password: password,
    };
    console.log(credentials);
  }
  form.reset();
}
