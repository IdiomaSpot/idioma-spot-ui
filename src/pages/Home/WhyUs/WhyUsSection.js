import React from 'react';
import { motion } from 'framer-motion';
import './WhyUsSection.scss';
import { Container, Grid } from '@mui/material';

const WhyUsSection = () => {
  const scrollVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div id='whyus-section' className='whyus-section'>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <motion.div
              className='fading-text'
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ amount: 0.5 }}
              variants={scrollVariants}
            >
              {' '}
              <h1>¿Por qué elegir IdiomaSpot?</h1>{' '}
            </motion.div>

            <span>
              En IdiomaSpot, empleamos tecnologías de vanguardia y métodos
              innovadores para garantizar que el proceso de aprendizaje sea
              dinámico y motivador.
            </span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhyUsSection;
