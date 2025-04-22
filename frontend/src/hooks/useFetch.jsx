import { useState, useEffect } from "react";
import api from "../api/api";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const { data } = await api.get(url);

        if (isMounted) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          console.log("useFetch error:", error);
          setState({
            data: null,
            loading: false,
            error: error.message || "Something went wrong",
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
};

export default useFetch;
