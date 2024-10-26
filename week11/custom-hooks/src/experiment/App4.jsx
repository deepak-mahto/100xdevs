import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

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

  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
}

export default App;
