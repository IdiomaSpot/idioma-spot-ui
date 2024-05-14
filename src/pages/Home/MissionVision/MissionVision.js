import React from 'react';
import './MissionVision.scss';
import { Box, Container, Grid } from '@mui/material';

export default function MissionVision() {
  return (
    <>
      <section id='mission-vision-section' className='mission-vision'>
        <Container maxWidth='lg' className='mission-vision-container'>
          <Grid container spacing={2}>
            <Box
              component={Grid}
              item
              xs={12}
              lg={6}
              className='mission-vision-text'
            >
              <h1>VISION</h1>
              <p>
                En IdiomaSpot no solo enseñamos, ¡sino que nos motiva inspirar a
                nuestros estudiantes a que alcancen sus metas lingüísticas y
                profesionales!
              </p>

              <h1>MISION</h1>
              <p>
                En IdiomaSpot nuestra misión es ofrecer un enfoque personalizado
                y adaptado a las necesidades de cada uno de nuestros
                estudiantes, a través de nuestro equipo de profesores altamente
                calificados, con el fin de lograr un aprendizaje efectivo y
                significativo.
              </p>
            </Box>
          </Grid>
        </Container>
      </section>
    </>
  );
}
