import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffectOnce } from '../../../../hooks/useEffectOnce';
import {
  createPrimaryText,
  createSecundaryText,
} from '../../../../utils/utils';
import useFetch from '../../../../hooks/useFetch';
import { IDIOMA_SPOT_API, HEADERS } from '../../../../data/constants';
import { setPreferenceId } from '../../../../context/features/enrollment/enrollmentSlice';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Payment = ({ handleNext }) => {
  const enrollment = useSelector((state) => state.enrollment);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [{ data, isLoading, hasError, errorMessage }, setFetch] = useFetch();

  const createPreference = useCallback(
    (body) => {
      setFetch({
        url: `${IDIOMA_SPOT_API}/payment/preference`,
        options: {
          mode: 'cors',
          method: 'post',
          headers: HEADERS,
          body: JSON.stringify(body),
        },
      });
    },
    [setFetch]
  );

  const setPreference = useCallback(
    (preferenceId) => {
      dispatch(
        setPreferenceId({
          preferenceId: preferenceId,
        })
      );
    },
    [dispatch]
  );

  useEffectOnce(() => {
    initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY);
    if (enrollment.classScheduleChanged) {
      //Avoid creating the same preference
      setPreference(null);
      const body = {
        items: [
          {
            id: `${enrollment.classSchedule.id}`,
            title: enrollment.classType,
            description: `${enrollment.classSchedule.classLevel} - ${enrollment.classSchedule.schedule}`,
            quantity: 1,
            unit_price: Number(enrollment.classSchedule.cost),
            currency_id: 'MXN',
          },
        ],
        payer: {
          name: user.name,
          surname: user.surname,
          email: user.email,
        },
      };
      createPreference(body);
    }
  });

  useEffect(() => {
    if (!isLoading) {
      if (hasError) {
        console.error('AN ERROR HAD OCURRED', errorMessage);
      }
      if (data?.preferenceId) {
        setPreference(data.preferenceId);
      }
    }
  }, [isLoading, hasError, errorMessage, data, setPreference]);

  if (enrollment?.classSchedule) {
    return (
      <>
        <h3>Resumen de inscripción</h3>
        {createPrimaryText(enrollment.classSchedule)}
        {createSecundaryText(enrollment.classSchedule)}

        {enrollment.preferenceId ? (
          <Wallet
            initialization={{ preferenceId: enrollment.preferenceId }}
            customization={{ texts: { valueProp: 'smart_option' } }}
          />
        ) : (
          <p>Ha ocurrido un error, intentalo de nuevo más tarde...</p>
        )}

        <RiSecurePaymentLine size={38} />
        <p>Tus pagos están protegidos con la tecnología de Mercado Pago</p>

        <p>
          Si requiere factura, favor de enviar sus datos al correo&nbsp;
          <a href="mailto:facturacion@idiomaspot.com.mx">
            facturacion@idiomaspot.com.mx
          </a>
        </p>
      </>
    );
  } else {
    <h3>Loading...</h3>;
  }
};

export default Payment;
