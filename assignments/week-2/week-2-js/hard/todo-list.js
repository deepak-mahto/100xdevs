/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.listOfTodos = [];
  }

  add(todo) {
    this.listOfTodos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.listOfTodos.length) {
      this.listOfTodos.splice(indexOfTodo, 1);
    } else {
      console.log("Invalid index, nothing removed");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.listOfTodos.length) {
      this.listOfTodos[index] = updatedTodo;
    } else {
      console.log("Invalid index, nothing updated");
    }
  }

  getAll() {
    return this.listOfTodos;
  }

  get(indexOfTodo) {
    if (this.listOfTodos.length > indexOfTodo) {
      return this.listOfTodos[indexOfTodo];
    } else {
      return null;
    }
  }

  clear() {
    this.listOfTodos = [];
  }
}

module.exports = Todo;
