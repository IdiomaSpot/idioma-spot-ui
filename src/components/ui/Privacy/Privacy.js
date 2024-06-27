import React from 'react';
import { Link, Typography } from '@mui/material';

const Privacy = ({ color }) => {
  return (
    <Typography variant='body2' color={color} align='center'>
      Al registrarte en IdiomaSpot aceptas nuestra{' '}
      <Link
        className='link-color'
        color='inherit'
        href='https://idiomaspot.com.mx/files/Politica_de_Privacidad-IdiomaSpot.pdf'
      >
        política de privacidad{' '}
      </Link>
      además de nuestros{' '}
      <Link
        className='link-color'
        color='inherit'
        href='https://idiomaspot.com.mx/files/Terminos_y_Condiciones_de_Uso-IdiomaSpot.pdf'
      >
        términos y condiciones de uso
      </Link>
    </Typography>
  );
};

export default Privacy;
