import React from 'react';
import PropTypes from 'prop-types';
import './TextBloc.scss';
import { Container } from '@mui/material';

const TextBloc = ({ text }) => (
  <div className='textbloc-container'>
    <Container>
      <span>{text}</span>
    </Container>
  </div>
);

TextBloc.propTypes = {
  text: PropTypes.string.isRequired,
};
TextBloc.defaultProps = {};

export default TextBloc;
