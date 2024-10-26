import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { finalTodo } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <h2>{JSON.stringify(finalTodo.title)}</h2>
    </div>
  );
}

export default App;
