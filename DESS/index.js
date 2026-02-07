import { generateGreeting } from "./greeting.js";

const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const output = document.getElementById("output");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    output.textContent = "Please enter your name!";
  } else {
    output.textContent = generateGreeting(name);
  }
});
