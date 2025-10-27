import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();
    return () => (ignore = true); // cleanup
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
