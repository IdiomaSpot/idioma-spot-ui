import React from 'react';
import './WhyUsSection.scss';
import { Container, Grid } from '@mui/material';

const WhyUsSection = () => {
  return (
    <div id='whyus-section' className='whyus-section'>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <h1>¿Por qué elegir IdiomaSpot?</h1>

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
