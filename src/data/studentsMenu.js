import { RiCalendarScheduleLine } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import { MdOutlinePayments } from 'react-icons/md';
import { TiHome } from 'react-icons/ti';

const optionsMenu = [
  {
    name: 'Inicio',
    type: 'home',
    icon: <TiHome />,
  },
  {
    name: 'Horarios',
    type: 'schedule',
    icon: <RiCalendarScheduleLine />,
  },
  {
    name: 'Pagos',
    type: 'payment',
    icon: <MdOutlinePayments />,
  },
  {
    name: 'Contacto',
    type: 'contact',
    icon: <RiContactsFill />,
  },
];

export default optionsMenu;
