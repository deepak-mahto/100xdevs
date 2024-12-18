import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        setTodos(res.data);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
      setLoading(false);
    });

    return () => {
      clearInterval(value);
    };
  }, [n]);
  return {
    todos,
    loading,
  };
}

function App() {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

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
