import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
}

export default App;
