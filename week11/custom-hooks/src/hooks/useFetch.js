import { useState, useEffect } from "react";

export function useFetch(url, value, retryTime) {
  const [finalPost, setFinalPost] = useState({});
  const [loading, setLoading] = useState(true);

  async function getPost() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalPost(json);
    setLoading(false);
  }

  useEffect(() => {
    getPost();
  }, [value]);

  useEffect(() => {
    const clear = setInterval(() => {
      getPost(url);
    }, retryTime);

    return () => {
      clearInterval(clear);
    };
  }, []);

  return {
    finalPost: finalPost,
    loading: loading,
  };
}
