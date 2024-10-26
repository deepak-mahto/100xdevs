import { useState, useEffect } from "react";

export function useFetch(url) {
  const [finalTodo, setFinalTodo] = useState({});

  async function getTodo() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalTodo(json);
  }

  useEffect(() => {
    getTodo();
  }, []);

  return {
    finalTodo: finalTodo,
  };
}
