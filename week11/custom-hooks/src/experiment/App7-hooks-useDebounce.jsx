import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  function sendDataToBackend() {
    console.log("Sent data to backend");
  }

  const deBounceFn = useDebounce(sendDataToBackend);

  return (
    <div>
      <input type="text" onChange={deBounceFn} placeholder="Enter to search" />
    </div>
  );
}

export default App;
