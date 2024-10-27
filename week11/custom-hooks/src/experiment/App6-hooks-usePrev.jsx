import { useState } from "react";
import "./App.css";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [count, setCount] = useState(0);
  const prev = usePrev(count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((curr) => curr + 1)}>Increase</button>
      <h2>Previous value was {prev}</h2>
    </div>
  );
}

export default App;
