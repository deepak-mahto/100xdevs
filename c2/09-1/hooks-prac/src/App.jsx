import { useEffect, useState } from "react";
import "./App.css";

function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debounce;
}

function App() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 500);

  useEffect(() => {
    console.log("Request sent to backend");
  }, [debounceValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter to search"
      />
    </div>
  );
}

export default App;
