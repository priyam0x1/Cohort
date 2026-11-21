const box = document.querySelectorAll("#box");
const main = document.querySelector("main");
// box[0].classList.add("box1");
// box[1].classList.add("box2");
// box[2].classList.add("box3");

// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");

// box1.style.backgroundColor = "white";
// box2.style.backgroundColor = "gold";
// box3.style.backgroundColor = "pink";

let box1 = document.createElement("div");
let box2 = document.createElement("div");
let box3 = document.createElement("div");
box1.classList.add("box");
box2.classList.add("box");
box3.classList.add("box");
box1.style.backgroundColor = "pink";
box2.style.backgroundColor = "white";
box3.style.backgroundColor = "yellow";
box1.textContent = "box-01";
box2.textContent = "box-02";
box3.textContent = "box-03";

main.append(box1, box2, box3);
