import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <Counter count={count} />
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default App;
