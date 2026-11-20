const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");
h1[0].textContent = "I am changed";
console.log(h1[2].classList.contains("heading"));
h1[2].classList.toggle("heading");
// const isClass = h1.classList.contains("heading");
// console.log(isClass);

// body.classList.remove("red");
// console.log(body.innerText);
// console.log(body.textContent);
