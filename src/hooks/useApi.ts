import { useState } from "react";
//Custom hook for all api requests
const useApi = (apiFunction: (props: any) => Promise<any>) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (args?: any) => {
    setLoading(true);
    console.log(args);
    const response = await apiFunction(args);
    setLoading(false);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, loading, error, request };
};

export default useApi;
