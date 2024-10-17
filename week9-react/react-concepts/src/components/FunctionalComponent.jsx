import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FunctionalCounter;
