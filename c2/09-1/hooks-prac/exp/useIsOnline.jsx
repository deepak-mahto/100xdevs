import { useEffect, useState } from "react";
import "./App.css";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}

function App() {
  const isOnline = useIsOnline();

  if (isOnline) {
    return <h2>You are online</h2>;
  }

  return (
    <div>
      <h2>You are offline, please connect to the internet</h2>
    </div>
  );
}

export default App;
