import { useCallback, useEffect, useState } from 'react';
import useFetch from './useFetch';
import { IDIOMA_SPOT_API, HEADERS } from '../data/constants';

const useStudentRequest = (initialRequest = {}) => {
  const [request, setRequest] = useState(initialRequest);
  const [{ data, isLoading, hasError, errorMessage }, setFetch] = useFetch();

  const getIsPoints = useCallback(
    ({ email }) => {
      setFetch({
        url: `${IDIOMA_SPOT_API}/is-points/${email}`,
        options: {
          mode: 'cors',
          headers: HEADERS,
        },
      });
    },
    [setFetch]
  );

  useEffect(() => {
    if (request && Object.keys(request).length) {
      switch (request.type) {
        case 'points':
          getIsPoints(request.data);
          break;
        default:
          break;
      }
    }
  }, [request, getIsPoints]);

  return [{ data, isLoading, hasError, errorMessage }, setRequest];
};

export default useStudentRequest;
