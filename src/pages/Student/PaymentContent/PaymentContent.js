import { useDispatch, useSelector } from 'react-redux';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import { changeContent } from '../../../context/features/student/studentSlice';
import { getMenuOption } from '../../../data/studentsMenu';
import { LoadingPage, Notification } from '../../../components/ui';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import useStudentRequest from '../../../hooks/useStudentRequest';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import './PaymentContent.scss';
import { getFormattedDate, getStatus } from '../../../utils/paymentUtils';

const getAccordionHeaders = (row) => {
  const paymentId = <b>{row?.paymentId || 'No disponible'}</b>;
  const description = row?.description || 'No disponible';
  const title = <i>{row?.title || ''}</i>;
  return (
    <Typography variant={'h6'}>
      {paymentId} {' - ' + description + ' - '} {title}
    </Typography>
  );
};
const getAccordionBody = (row) => {
  const statusObj = row?.status
    ? getStatus(row?.status)
    : { name: 'No disponible' };
  const date = (
    <>
      <b>Fecha de pago: </b>{' '}
      {row?.createdAt ? getFormattedDate(row?.createdAt) : 'No disponible'}
    </>
  );
  const orderId = (
    <>
      <b>Id de orden: </b> {row?.merchantOrderId || 'No disponible'}
    </>
  );
  const reference = (
    <>
      <b>Referencia de pago: </b> {row?.externalReference || ''}
    </>
  );
  const status = (
    <div className='status'>
      <b className='space'>Estado: </b>{' '}
      <span className='space dot'>
        {statusObj.name}
        {statusObj?.icon}
      </span>{' '}
    </div>
  );
  const price = (
    <>
      <b>Costo: </b>
      {row?.unitPrice ? '$' + row?.unitPrice + ' MXN' : 'No disponible'}
    </>
  );

  return (
    <Grid className='grid-container' container spacing={1} textAlign='left'>
      <Grid className='grid-item' item xs={6}>
        {date}
      </Grid>
      <Grid className='grid-item' item xs={6}>
        {orderId}
      </Grid>
      <Grid className='grid-item' item xs={6}>
        {reference}
      </Grid>
      <Grid className='grid-item' item xs={6}>
        {status}
      </Grid>
      <Grid className='grid-item' item xs={6}>
        {price}
      </Grid>
    </Grid>
  );
};

const PaymentContent = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [{ data: payments, isLoading, hasError, errorMessage }, setRequest] =
    useStudentRequest();
  const user = useSelector((state) => state.user);
  const [expanded, setExpanded] = useState('');

  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('payment')));
    if (user?.id) {
      setRequest({
        type: 'payments',
        data: {
          userId: user?.id,
        },
      });
    }
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

  const getRow = (row) => (
    <Accordion
      key={row?.externalReference}
      expanded={expanded === row?.externalReference}
      onChange={handleChange(row?.externalReference)}
    >
      <AccordionSummary
        className='accordion-title'
        aria-controls='row-content'
        expandIcon={<ExpandCircleDownIcon fontSize='large' />}
      >
        {getAccordionHeaders(row)}
      </AccordionSummary>
      <AccordionDetails className='accordion-body'>
        {getAccordionBody(row)}
      </AccordionDetails>
    </Accordion>
  );

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <LoadingPage openOn={isLoading} />
      {!isLoading && (
        <div className='payment-container'>
          <Notification type={'error'} open={open} onClose={handleClose} />
          <div className='payment-header'>
            <Typography variant='h4' className='title'>
              Mis pagos:
            </Typography>
          </div>
          {payments?.length ? (
            <Container
              className='payment-table-container'
              sx={{ width: { sx: '100%', md: '65%' } }}
            >
              {payments.map((row) => getRow(row))}
            </Container>
          ) : payments ? (
            <div className='info-container'>
              <Alert variant='filled' severity='info'>
                No tienes pagos pendientes.
              </Alert>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </>
  );
};

export default PaymentContent;
