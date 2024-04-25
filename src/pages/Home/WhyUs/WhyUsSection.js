import React from 'react';
import './WhyUsSection.scss';
import { Grid } from '@mui/material';

const WhyUsSection = () => {
  return (
    <div className='whyus-section'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>¿Por qué elegir IdiomaSpot?</h1>

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
