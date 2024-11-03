import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);
  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function Track({ todo }) {
  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
}

export default App;
