import { useCallback, useEffect, useState } from 'react';
import useFetch from './useFetch';
import { IDIOMA_SPOT_API, HEADERS } from '../data/constants';

const useAdminRequest = (initialRequest = {}) => {
  const [request, setRequest] = useState(initialRequest);
  const [{ data, isLoading, hasError, errorMessage }, setFetch] = useFetch();

  const saveCampain = useCallback(
    ({ image, title, description, enableSignUpButton }) => {
      const body = new FormData();
      body.append('title', title);
      body.append('description', description);
      body.append('image', image);
      body.append('enableSignUpButton', enableSignUpButton);

      setFetch({
        url: `${IDIOMA_SPOT_API}/promo/create`,
        options: {
          mode: 'cors',
          method: 'post',
          body: body,
        },
      });
    },
    [setFetch]
  );

  const getCurrentCampain = useCallback(() => {
    setFetch({
      url: `${IDIOMA_SPOT_API}/promo`,
      options: {
        mode: 'cors',
        headers: HEADERS,
      },
    });
  }, [setFetch]);

  useEffect(() => {
    if (request && Object.keys(request).length) {
      switch (request.type) {
        case 'save-campain':
          saveCampain(request.data);
          break;
        case 'get-campain':
          getCurrentCampain();
          break;
        default:
          break;
      }
    }
  }, [saveCampain, getCurrentCampain, request]);

  return [{ data, isLoading, hasError, errorMessage }, setRequest];
};

export default useAdminRequest;
