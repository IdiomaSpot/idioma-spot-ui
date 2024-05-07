import React from 'react';
import PropTypes from 'prop-types';
//import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import './Methodology.scss';

/*const MethodologyItem = ({ icon, title, description }) => {
    return <>
        <div className='methodology-item-container'>
            <Grid container xs={12} md={4} lg={3} spacing={2}>
                <Grid item xs={3}>
                    <span>icon</span>
                </Grid>
                <Grid item xs={9}>
                    <Grid container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                    </Grid>
                    <Grid item xs={3}>
                        <span>title</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span>text</span>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </>
}*/

Methodology.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default function Methodology() {

    return <>
        <section id='methodology-section' className='methodology-section'>
            <Container maxWidth="sm">
                <h1>METODOLOGIA IDIOMA SPOT</h1>
                <p>Nuestro programa académico <b>IIS</b> está enfocado en las necesidades de nuestros estudiantes,
                    con las metodologías educativas de vanguardia aprenderás de manera interactiva, intuitiva y sinérgica</p>


                {/*<MethodologyItem icon={''} description={''} title={''}></MethodologyItem>*/}

            </Container>
        </section>
    </>

}