import { useEffect, useState } from "react";

// mounting, re-rendering, unmounting - lifecycle events
const StopWatch = () => {
  const [count, setCount] = useState(0);

  // hooking into the lifecycle events of react
  console.log("inside counter component");

  // useEffect will guard the setIntervals from the re-renders
  useEffect(() => {
    console.log("on mount");
    let clock = setInterval(() => {
      console.log("from inside the setInterval");
      setCount((count) => count + 1);
    }, 1000);

    return function () {
      console.log("on unmounted");
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      <h1>Stop watch</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default StopWatch;

// conditional rendering - first
// dependency array, cleanup, fetch inside useEffect
