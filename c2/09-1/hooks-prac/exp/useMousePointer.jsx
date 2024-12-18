import { useEffect, useState } from "react";
import "./App.css";

function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}

function App() {
  const mousePointer = useMousePointer();
  return (
    <div>
      <h2>
        Position of mouse pointer is {mousePointer.x} {mousePointer.y}
      </h2>
    </div>
  );
}

export default App;
