import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} />
      <Button setCount={setCount} />
    </div>
  );
}

function Count({ count }) {
  return <div>{count}</div>;
}

function Button({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

export default App;
