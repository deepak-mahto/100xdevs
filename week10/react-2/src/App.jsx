import React, { useRef, useState } from "react";

const App = () => {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  function startClock() {
    const value = setInterval(() => {
      setCurrentCount((c) => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
  }
  return (
    <>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </>
  );
};

export default App;
