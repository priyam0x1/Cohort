const btn = document.querySelector("button");
const clBtn = document.querySelector(".btn");
const bulb = document.querySelector(".bulb");

let flag = true;

btn.addEventListener("click", () => {
  if (flag) {
    clBtn.innerText = "Off";
    bulb.classList.toggle("color");
    flag = false;
  } else {
    clBtn.innerText = "On";
    bulb.classList.toggle("color");
    flag = true;
  }
});
