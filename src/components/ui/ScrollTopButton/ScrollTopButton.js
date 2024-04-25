import React from 'react';
import './ScrollTopButton.scss';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTopButton = () => {
  var rootElement = document.documentElement;
  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='scroll-button-container'>
      <IconButton
        className='scroll-button'
        size='large'
        variant='contained'
        aria-label='delete'
        onClick={scrollToTop}
        sx={{ boxShadow: 2 }}
      >
        <KeyboardArrowUpIcon fontSize='inherit' />
      </IconButton>
    </div>
  );
};

export default ScrollTopButton;
