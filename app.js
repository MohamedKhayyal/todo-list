// selector
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todolist = document.querySelector(".todo-list");
// eventLisner
todoBtn.addEventListener("click", addTask);
todolist.addEventListener("click", checkOrDelete);
// function
function addTask(e) {
  e.preventDefault();
  //create li
  const todoli = document.createElement("li");
  todoli.classList.add("todo");
  //create div
  const tododiv = document.createElement("div");
  tododiv.classList.add("task-item");
  //add input value to div
  tododiv.innerText = todoInput.value;
  //create button comblete
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  //create button trash
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  // add div + btn to li
  todoli.appendChild(tododiv);
  todoli.appendChild(completeBtn);
  todoli.appendChild(trashBtn);
  // add li to ul
  todolist.appendChild(todoli);
  // clear the input
  todoInput.value = "";
}

function checkOrDelete(e) {
  //get element by target onclick && print array
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    //let todo = parent(li)
    const todo = item.parentElement;
    //add class completed
    todo.classList.toggle("completed");
  } else if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("fail");
    //create transition when remove
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
}
