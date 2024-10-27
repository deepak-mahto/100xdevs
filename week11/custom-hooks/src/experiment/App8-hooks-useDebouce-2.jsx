import { useEffect, useState } from "react";
import "./App.css";
import { useDebounce2 } from "./hooks/useDebounce2";

function App() {
  const [inputVal, setInputVal] = useState("");
  const deBounceVal = useDebounce2(inputVal, 200);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("Sent request to the backend");
  }, [deBounceVal]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter to search something"
        onChange={change}
      />
    </div>
  );
}

export default App;
