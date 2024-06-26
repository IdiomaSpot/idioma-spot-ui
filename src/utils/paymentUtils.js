import { IoCheckmarkCircle } from 'react-icons/io5'; // approved
import { IoCloseCircle } from 'react-icons/io5'; //failed
import { IoEllipse } from 'react-icons/io5';

export const getStatus = (status) => {
  switch (status) {
    case 'approved':
      return { name: 'Exitoso', icon: <IoCheckmarkCircle className='green' /> };
    case 'pending':
      return { name: 'Pendiente', icon: <IoEllipse className='yellow' /> };
    case 'failed':
      return { name: 'Cancelado', icon: <IoCloseCircle className='red' /> };
    default:
      return { name: 'Inicial', icon: <IoEllipse className='gray' /> };
  }
};

export const getFormattedDate = (date) => {
  const currentDate = new Date(date);
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
};
