import { useState, useEffect } from "react";

export function useFetch(url, value) {
  const [finalPost, setFinalPost] = useState({});

  async function getPost() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalPost(json);
  }

  useEffect(() => {
    getPost();
  }, [value]);

  return {
    finalPost: finalPost,
  };
}
