import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r);
    }, 5000);
  }, []);

  return <div>{render ? <MyComponent /> : <h1>From outside the comp</h1>}</div>;
}

function MyComponent() {
  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <div>
      <h1>From inside the comp</h1>
    </div>
  );
}

export default App;
