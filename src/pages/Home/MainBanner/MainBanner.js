import React, { useRef } from 'react';
import './MainBanner.scss';
import { Button } from '@mui/material';


function IdiomaSpotStep() {
    return <>
        <div className='banner-container step-1'>
            <h1>IDIOMA SPOT</h1>
            <Button
                className='idioma-spot-button'
                variant="contained"
                href="https://docs.google.com/forms"
                target='_blank' size='large'>
                <span>EVALUA TU DOMINIO DEL IDIOMA</span>
            </Button>
        </div>
    </>
}

function RewardsStep() {
    return <>
        <div className='banner-container step-2'>
            <h1>¿TE IMAGINAS GANAR PREMIOS POR APRENDER?</h1>
            <h2>¡En Idioma Spot es posible!</h2>
            <p>
                A través de diversas actividades obtendras puntos <b>IS</b>, los cuales podrás canjear en nuestra Sala de Recompensas.
            </p>
            <Button
                className='idioma-spot-button'
                variant="contained"
                href="https://docs.google.com/forms"
                target='_blank' size='large'>
                <span>REGISTRATE AHORA</span>
            </Button>
        </div></>
}

export default function MainBanner() {
    const swiperElRef = useRef(null);

    return (
        <>
            <swiper-container
                ref={swiperElRef}
                centered-slides="true"
                autoplay-delay="3000"
                autoplay-disable-on-interaction="false"
                pagination-clickable="true"
                navigation="false"
                class="main-banner"
            >
                <swiper-slide>
                    <IdiomaSpotStep />
                </swiper-slide>
                <swiper-slide>
                    <RewardsStep />
                </swiper-slide>
            </swiper-container>
        </>
    )
}