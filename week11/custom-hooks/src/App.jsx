import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalPost, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${currentPost}`,
    currentPost,
    10000
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button> <br />
      <h2>{JSON.stringify(finalPost.title)}</h2>
    </div>
  );
}

export default App;
