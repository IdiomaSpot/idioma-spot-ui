import { useCallback, useEffect, useState } from 'react';
import useFetch from './useFetch';
import { IDIOMA_SPOT_API, HEADERS } from '../data/constants';

const useAdminRequest = (initialRequest = {}) => {
  const [request, setRequest] = useState(initialRequest);
  const [{ data, isLoading, hasError, errorMessage }, setFetch] = useFetch();

  const saveCampaign = useCallback(
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

  const getCurrentCampaign = useCallback(() => {
    setFetch({
      url: `${IDIOMA_SPOT_API}/promo`,
      options: {
        mode: 'cors',
        headers: HEADERS,
      },
    });
  }, [setFetch]);

  const getPayments = useCallback(() => {
    setFetch({
      url: `${IDIOMA_SPOT_API}/payment`,
      options: {
        mode: 'cors',
        headers: HEADERS,
      },
    });
  }, [setFetch]);

  const deleteCampaign = useCallback(
    (id) => {
      setFetch({
        url: `${IDIOMA_SPOT_API}/promo/${id}`,
        options: {
          mode: 'cors',
          method: 'delete',
          headers: HEADERS,
        },
      });
    },
    [setFetch]
  );

  useEffect(() => {
    if (request && Object.keys(request).length) {
      switch (request.type) {
        case 'save-campaign':
          saveCampaign(request.data);
          break;
        case 'get-campaign':
          getCurrentCampaign();
          break;
        case 'get-payments':
          getPayments();
          break;
        case 'delete-campaign':
          deleteCampaign(request.campaignId);
          break;
        default:
          break;
      }
    }
  }, [saveCampaign, getCurrentCampaign, getPayments, deleteCampaign, request]);

  return [{ data, isLoading, hasError, errorMessage }, setRequest];
};

export default useAdminRequest;
