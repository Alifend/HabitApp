import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, params, method) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });
  useEffect(() => {
    const lamonda = async () => {
      const data = await axios({
        url,
        method,
        params,
      });
      setState({ data: data.data, loading: false });
    };
    lamonda();
  }, []);

  return [state.data, state.loading];
};

export default useFetch;
