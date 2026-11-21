// const h3 = document.querySelector("h3");
// console.log(h3.getAttribute("class"));
// h3.setAttribute("width", "chandrama");
// console.log(h3.getAttribute("width"));
// console.log(h3.hasAttribute("class"));
// h3.removeAttribute("class");
// console.log(h3.hasAttribute("class"));

const userCard = document.querySelector("#user_card");
// console.log(userCard.getAttribute("data-user-id"));

// Custonm attributes value changing
userCard.dataset.userId = "678";
// console.log(userCard.getAttribute("data-user-id"));

const inp = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(`Input Value using inp.value : ${inp.value}`);
  console.log(`Input Value using getAttribute : ${inp.getAttribute("value")}`);
});
