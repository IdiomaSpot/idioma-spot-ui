import { useDispatch } from 'react-redux';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import { changeContent } from '../../../context/features/student/studentSlice';
import { getMenuOption } from '../../../data/studentsMenu';

const PaymentContent = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('payment')));
  });
  return (
    <>
      {' '}
      <p>Payment</p>
    </>
  );
};

export default PaymentContent;
