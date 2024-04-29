import React from 'react';
import './MissionVision.scss';
import { Container, Grid } from '@mui/material';

export default function MissionVision() {
    return <>
        <section className='mission-vision'>
            <Container maxWidth='lg' className='mission-vision-container'>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <h1>MISION Y VISION</h1>
                        <p>
                            En IdiomaSpot, nos destacamos por ofrecer un enfoque personalizado
                            y adaptado a las necesidades de cada estudiante.<br />
                            Nuestro equipo de profesionales altamente calificados y con amplia
                            experiencia en la enseñanza del inglés, garantiza un aprendizaje
                            efectivo y significativo. Además, utilizamos las últimas tecnologías
                            y metodologías innovadoras para hacer que el proceso de aprendizaje
                            sea dinámico y motivador. En IdiomasSpot, no solo enseñamos inglés,
                            ¡sino que también inspiramos a nuestros estudiantes a alcanzar sus
                            metas lingüisticas y profesionales.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </>
}