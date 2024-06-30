import { useEffect, useState } from 'react';
import './Payments.scss';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import { useDispatch } from 'react-redux';
import { changeContent } from '../../../context/features/admin/adminSlice';
import { getMenuOption } from '../../../data/adminMenu';
import useAdminRequest from '../../../hooks/useAdminRequest';
import { LoadingPage, Notification } from '../../../components/ui';
import PaymentTable from './PaymentTable/PaymentTable';
import { Alert, Typography } from '@mui/material';

const Payments = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [{ data: payments, isLoading, hasError, errorMessage }, setGetRequest] =
    useAdminRequest();

  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('payment')));
    setGetRequest({
      type: 'get-payments',
    });
  });

  useEffect(() => {
    if (hasError) {
      setOpen(true);
    }
  }, [hasError, errorMessage]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <LoadingPage openOn={isLoading} />
      {!isLoading && (
        <div className="payment-container">
          <Notification type={'error'} open={open} onClose={handleClose} />
          <div className="payment-header">
            <Typography variant="h4" className="title">
              Pagos
            </Typography>
            <p>Historial de pagos de los últimos 30 días</p>
          </div>
          {payments?.length ? (
            <PaymentTable rows={payments} />
          ) : (
            <div className="info-container">
              <Alert variant="filled" severity="info">
                Sin pagos para mostrar...
              </Alert>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Payments;
