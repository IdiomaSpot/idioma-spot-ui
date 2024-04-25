import React from 'react';
import './WhyUsSection.scss';
import { Grid } from '@mui/material';
import { Animator, Move, Fade, batch } from 'react-scroll-motion';

const WhyUsSection = () => {
  const FadeUp = batch(Fade(), Move(-200, 0));

  return (
    <div className='whyus-section'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {
            //<Animator animation={FadeUp}>
          }
          <h1>¿Por qué elegir IdiomaSpot?</h1>
          {
            //</Animator>
          }
          <span>
            En IdiomaSpot, empleamos tecnologías de vanguardia y métodos
            innovadores para garantizar que el proceso de aprendizaje sea
            dinámico y motivador.
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyUsSection;
