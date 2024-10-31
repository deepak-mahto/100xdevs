import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Track todo={todo} />
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
