const name = document.querySelector("#name");
const email = document.querySelector("#email");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target[0].value);
  console.log(event.target[1].value);
  event.target[0].value = "";
  event.target[1].value = "";
});
