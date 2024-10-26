import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
    </div>
  );
}

export default App;
