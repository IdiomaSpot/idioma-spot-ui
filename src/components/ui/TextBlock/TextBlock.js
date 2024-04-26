import React from 'react';
import PropTypes from 'prop-types';
import './TextBlock.scss';
import { Container } from '@mui/material';

const TextBlock = ({ text }) => (
  <div className='textblock-container'>
    <Container>
      <span>{text}</span>
    </Container>
  </div>
);

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
};
TextBlock.defaultProps = {};

export default TextBlock;
