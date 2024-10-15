import { useEffect, useState } from "react";

// mounting, re-rendering, unmounting - lifecycle events
const Button = () => {
  const [count, setCount] = useState(0);

  // hooking into the lifecycle events of react
  console.log("inside counter component");

  // useEffect will guard the setIntervals from the re-renders
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("mounted");
  }, []);

  return (
    <div>
      <h1>Stop watch</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default Button;

// conditional rendering - first
// dependency array, cleanup, fetch inside useEffect
