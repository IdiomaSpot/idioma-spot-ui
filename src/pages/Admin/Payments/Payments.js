import './Payments.scss';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import { useDispatch } from 'react-redux';
import { changeContent } from '../../../context/features/admin/adminSlice';
import { getMenuOption } from '../../../data/adminMenu';

const Payments = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('marketing')));
  });
  return <>Payments</>;
};

export default Payments;
