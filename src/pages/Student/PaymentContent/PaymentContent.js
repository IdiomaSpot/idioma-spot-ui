import React from 'react';
import data from '../../../data/PaymentSample.json';
import PaymentsTable from './PaymentsTable';

const PaymentContent = ({ data }) => {
  return (
    <>
      {' '}
      <h2>Tus últimos pagos</h2>
      <div className='payment-body'>
        <PaymentsTable rows={data} />
      </div>
    </>
  );
};

PaymentContent.defaultProps = {
  data: data,
};

export default PaymentContent;
