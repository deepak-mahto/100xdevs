import { useState, useEffect } from "react";

export function useFetch(url) {
  const [finalPost, setFinalPost] = useState({});

  async function getPost() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalPost(json);
  }

  useEffect(() => {
    getPost();
  }, []);

  return {
    finalPost: finalPost,
  };
}
