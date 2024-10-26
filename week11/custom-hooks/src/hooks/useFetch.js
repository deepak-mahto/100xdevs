import { useState, useEffect } from "react";

export function useTodoTitle() {
  const [todo, setTodo] = useState({});

  async function getTodo() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    setTodo(json);
  }

  useEffect(() => {
    getTodo();
  }, []);

  return todo.title;
}
