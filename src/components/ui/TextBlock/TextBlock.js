import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './TextBlock.scss';
import { Container } from '@mui/material';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const TextBlock = ({ text }) => {
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const updatedThisRound = useMotionValue(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 300, {
        type: 'tween',
        duration: 6,
        ease: 'easeIn',
      });
      return controls.stop
    }
  }, [isInView, textIndex, updatedThisRound, count, text.length]);

  return (
    <div className='textblock-container' ref={ref}>
      <Container>
        <motion.span className='text-container'>{displayText}</motion.span>
      </Container>
    </div>
  );
};

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
};
TextBlock.defaultProps = {};

export default TextBlock;
