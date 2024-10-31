import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000);
  }, []);

  return <div>{render ? <MyComponent /> : <div></div>}</div>;
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
      <h1>hi there</h1>
    </div>
  );
}

export default App;
