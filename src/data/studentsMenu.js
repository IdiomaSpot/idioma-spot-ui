import { MdOutlinePayments } from 'react-icons/md';
import { TiHome } from 'react-icons/ti';
import { PiBookOpenTextDuotone } from 'react-icons/pi';

const optionsMenu = [
  {
    name: 'Inicio',
    type: 'home',
    icon: <TiHome />,
  },
  {
    name: 'Mis clases',
    type: 'my-classes',
    icon: <PiBookOpenTextDuotone />,
  },
  {
    name: 'Pagos',
    type: 'payment',
    icon: <MdOutlinePayments />,
  },
];
const optionsNames = [
  {
    name: 'Inicio',
    type: 'home',
  },
  {
    name: 'Mis clases',
    type: 'my-classes',
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
