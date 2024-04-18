import React from 'react';
import PropTypes from 'prop-types';
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
    <IconButton
      className='scroll-button'
      size='large'
      variant='contained'
      aria-label='delete'
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon fontSize='inherit' />
    </IconButton>
  );
};

ScrollTopButton.propTypes = {
  idTop: PropTypes.string.isRequired,
};
ScrollTopButton.defaultProps = {};

export default ScrollTopButton;
