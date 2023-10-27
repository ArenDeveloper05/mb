import { useEffect, useState } from "react";

const useFetchData = (request, limit) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await request(limit);
        setResult(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [limit, request]);

  return {
    result,
    loading,
    error,
  };
};

export default useFetchData;
