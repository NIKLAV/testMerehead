import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const baseUrl = "http://localhost:3000/";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})
  
  const doFetch = useCallback((options = {}) => {
      setOptions(options)
      setIsLoading(true)
  },[])

  
  useEffect(() => { 
    
    axios(baseUrl + url, options)
      .then((res) => {
        setIsLoading(false)  
        setResponse(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error)
      });
  }, [isLoading, options, url]);
  return [{ isLoading, response, error }, doFetch];
};

export default useFetch;