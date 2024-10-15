import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{`Count ${count}`}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Button;
