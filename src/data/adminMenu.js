import { GrAnnounce } from 'react-icons/gr';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

const optionsMenu = [
  {
    name: 'Campaña de marketing',
    type: 'marketing',
    icon: <GrAnnounce />,
  },
  {
    name: 'Pagos',
    type: 'payments',
    icon: <FaMoneyBillTransfer />,
  },
];
const optionsNames = [
  {
    name: 'Campaña de marketing',
    type: 'marketing',
  },
  {
    name: 'Pagos',
    type: 'payment',
  },
];

const getMenuOption = (type) => {
  return optionsNames.find((option) => option.type === type);
};

export { getMenuOption, optionsMenu };
