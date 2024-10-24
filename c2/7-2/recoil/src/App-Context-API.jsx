import { useContext, useState } from "react";
import { CountContext } from "./Contexts";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider
        value={{
          count: count,
          setCount: setCount,
        }}
      >
        <Counter />
      </CountContext.Provider>
    </div>
  );
}

function Counter() {
  console.log("counter component is re-rendering");
  return (
    <div>
      <Count />
      <Button />
    </div>
  );
}

function Count() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Button() {
  console.log("button component is re-rendering");
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

export default App;
