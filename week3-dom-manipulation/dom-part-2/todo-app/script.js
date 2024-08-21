const addBtn = document.getElementById("task-btn");
const input = document.getElementById("task-input");
const parent = document.getElementById("todo-parent");

let ctr = 0;
let todos = [];

function addItem() {
  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }
  todos.push({
    todoId: "todo-input-" + ctr,
    editId: "edit-" + ctr,
    deleteId: "delete-" + ctr,
    TodoTextId: "todo-text-" + ctr,
    checkId: "check-" + ctr,
    title: input.value,
    isEditing: false,
    isCompleted: false,
  });
  ctr++;
  renderTodos(todos);
  input.value = "";
}

function deleteItem(id) {
  todos = todos.filter((todo) => todo.todoId !== id);
  renderTodos(todos);
}

function toggleEditItem(id) {
  todos = todos.map((todo) => {
    if (todo.todoId === id) {
      if (todo.isEditing) {
        todo.title = document.getElementById(todo.TodoTextId).value;
      }
      todo.isEditing = !todo.isEditing;
    }
    return todo;
  });
  renderTodos(todos);
}

function checkItem(id) {
  todos = todos.map((todo) => {
    if (todo.todoId === id) {
      todo.isCompleted = !todo.isCompleted;
    }
    return todo;
  });
  renderTodos(todos);
}

function renderTodos(todos) {
  parent.innerHTML = "";
  todos.forEach((todo) => {
    const todosContainer = document.createElement("div");
    todosContainer.setAttribute("id", todo.todoId);
    todosContainer.classList.add("todo");

    const checkInpBoxContainer = document.createElement("div");
    checkInpBoxContainer.classList.add("checkbox-input");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", todo.checkId);
    checkbox.checked = todo.isCompleted;

    const inputBox = document.createElement("input");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("id", todo.TodoTextId);
    inputBox.setAttribute("value", todo.title);

    checkInpBoxContainer.appendChild(checkbox);
    checkInpBoxContainer.appendChild(inputBox);

    const editDeleteContainer = document.createElement("div");
    editDeleteContainer.classList.add("edit-delete");

    const editBtnContainer = document.createElement("button");
    editBtnContainer.setAttribute("id", todo.editId);
    editBtnContainer.innerHTML = todo.isEditing ? "Save" : "Edit";

    const deleteBtnContainer = document.createElement("button");
    deleteBtnContainer.setAttribute("id", todo.deleteId);
    deleteBtnContainer.innerHTML = "Delete";

    editDeleteContainer.appendChild(editBtnContainer);
    editDeleteContainer.appendChild(deleteBtnContainer);

    todosContainer.appendChild(checkInpBoxContainer);
    todosContainer.appendChild(editDeleteContainer);

    parent.appendChild(todosContainer);
  });

  todos.forEach((todo) => {
    document.getElementById(todo.deleteId).addEventListener("click", () => {
      deleteItem(todo.todoId);
    });
    document.getElementById(todo.editId).addEventListener("click", () => {
      toggleEditItem(todo.todoId);
    });

    if (todo.isEditing) {
      const inputField = document.getElementById(todo.TodoTextId);
      inputField.focus();
      inputField.classList.add(
        "outline-none",
        "ring",
        "ring-blue-500",
        "rounded-md",
        "p-1"
      );
    }

    document.getElementById(todo.checkId).addEventListener("click", () => {
      checkItem(todo.todoId);
    });
    if (todo.isCompleted) {
      const inputText = document.getElementById(todo.TodoTextId);
      inputText.classList.add("line-through", "text-gray-500");
    }
  });
}

addBtn.addEventListener("click", () => {
  addItem();
});
