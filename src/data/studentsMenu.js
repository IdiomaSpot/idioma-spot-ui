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

export default optionsMenu;
