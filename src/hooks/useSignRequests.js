import { useCallback, useEffect, useState } from 'react';
import useFetch from './useFetch';
import { IDIOMA_SPOT_API, HEADERS } from '../data/constants';

const useSignRequest = (initialRequest = {}) => {
  const [request, setRequest] = useState(initialRequest);
  const [{ data, isLoading, hasError, errorMessage }, setFetch] = useFetch();

  const logIn = useCallback(
    ({ email, password }) => {
      setFetch({
        url: `${IDIOMA_SPOT_API}/user/login`,
        options: {
          mode: 'cors',
          method: 'post',
          headers: HEADERS,
          body: JSON.stringify({
            email,
            password,
          }),
        },
      });
    },
    [setFetch]
  );

  const signUp = useCallback(
    ({ name, surname, phone, email, password, role }) => {
      setFetch({
        url: `${IDIOMA_SPOT_API}/user`,
        options: {
          mode: 'cors',
          method: 'post',
          headers: HEADERS,
          body: JSON.stringify({
            name,
            surname,
            phone,
            email,
            password,
            role,
          }),
        },
      });
    },
    [setFetch]
  );

  useEffect(() => {
    if (request && Object.keys(request).length) {
      switch (request.type) {
        case 'login':
          logIn(request.data);
          break;
        default:
          signUp(request.data);
      }
    }
  }, [request, logIn, signUp]);

  return [{ data, isLoading, hasError, errorMessage }, setRequest];
};

export default useSignRequest;
