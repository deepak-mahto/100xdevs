import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { finalPost } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <h2>{JSON.stringify(finalPost.title)}</h2>
    </div>
  );
}

export default App;
