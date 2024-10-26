import { useState } from "react";
import "./App.css";

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount((count) => count + 1);
  }

  return {
    count: count,
    increaseCounter: increaseCounter,
  };
}

function App() {
  const { count, increaseCounter } = useCounter();

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increaseCounter}>Count</button>
    </div>
  );
}

export default App;
