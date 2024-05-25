import React from 'react';
import { Backdrop, Box, LinearProgress } from '@mui/material';
import logo from '../../../assets/img/logo.png';
import './LoadingLogo.scss';
const LoadingLogo = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      className='loading-logo'
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <img className='logo-img' alt='Idioma Spot Logo' src={logo} />
          <LinearProgress />
        </Box>
      </Box>
    </Backdrop>
  );
};

export default LoadingLogo;
