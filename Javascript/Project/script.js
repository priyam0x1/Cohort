const inp = document.querySelector("input");
const add = document.querySelector("#add");
const todo = document.querySelector(".todo-list");

add.addEventListener("click", () => {
  if (inp.value.trim() === "") {
    return;
  }
  todo.innerHTML += `<div class="li">
          <h3>${inp.value}</h3>
          <div>
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
          </div>
        </div>`;

  inp.value = "";
});
