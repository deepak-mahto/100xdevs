import { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
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
