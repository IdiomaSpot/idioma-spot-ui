import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './TextBlock.scss';
import { Container } from '@mui/material';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const TextBlock = ({ text }) => {
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 300, {
      type: 'tween',
      duration: 8,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 2,
    });
  }, [textIndex, updatedThisRound, count, text.length]);

  return (
    <div className='textblock-container'>
      <Container>
        <motion.span>{displayText}</motion.span>
      </Container>
    </div>
  );
};

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
};
TextBlock.defaultProps = {};

export default TextBlock;
