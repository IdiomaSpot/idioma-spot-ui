import { useState, useEffect } from 'react';
import { resetUser } from '../context/features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const useFetch = (initialUrl = '', initialOptions = {}) => {
  const [fetchingData, setFetch] = useState({
    url: initialUrl,
    options: initialOptions,
  });
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.access_token);

  useEffect(() => {
    if (!fetchingData.url) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        //Add Authorization Bearer
        if (fetchingData?.options) {
          fetchingData.options.headers = {
            ...fetchingData.options?.headers,
            Authorization: userToken ? `Bearer ${userToken}` : undefined,
          };
        }

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
  }, [fetchingData, userToken]);

  useEffect(() => {
    if (errorMessage?.status === 401) {
      dispatch(resetUser());
    }
  }, [errorMessage, dispatch]);

  return [{ data, isLoading, hasError, errorMessage }, setFetch];
};
export default useFetch;
