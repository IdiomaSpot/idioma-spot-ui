import { useState, useEffect } from 'react';

const useFetch = (initialUrl = '', initialOptions = {}) => {
  const [fetchingData, setFetch] = useState({
    url: initialUrl,
    options: initialOptions,
  });
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!fetchingData.url) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(fetchingData.url, fetchingData.options);
        const result = await response.json();
        if (response.ok) {
          setData(result);
          setHasError(false);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchingData.url, fetchingData.options]);

  return [{ data, isLoading, hasError, errorMessage }, setFetch];
};
export default useFetch;
