import { useEffect, useState } from "react";
import "./App.css";

function useInterval(func, delay) {
  useEffect(() => {
    const value = setInterval(() => {
      func();
    }, delay);

    return () => {
      clearInterval(value);
    };
  }, []);
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return (
    <div>
      <h2>Count is at {count}</h2>
    </div>
  );
}

export default App;
