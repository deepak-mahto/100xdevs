import "./App.css";
import { useTodoTitle } from "./hooks/useFetch";

function App() {
  const todoTitle = useTodoTitle();
  return (
    <div>
      <h2>{todoTitle}</h2>
    </div>
  );
}

export default App;
