import React, { useRef } from 'react';
import './MainBanner.scss';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

function IdiomaSpotStep() {
  return (
    <>
      <div className='banner-container step-1'>
        <h1>IDIOMA SPOT</h1>
        <Button
          className='idioma-spot-button'
          variant='contained'
          href='https://docs.google.com/forms'
          target='_blank'
          size='large'
        >
          <span>EVALUA TU DOMINIO DEL IDIOMA</span>
        </Button>
      </div>
    </>
  );
}

function RewardsStep() {
  return (
    <>
      <div className='banner-container step-2'>
        <div className='step-2-wrapper'>
          <h1>¿TE IMAGINAS GANAR PREMIOS POR APRENDER?</h1>
          <br />
          <h2>¡En IdiomaSpot es posible!</h2>
          <br />
          <Button
            className='idioma-spot-button'
            variant='contained'
            href='https://docs.google.com/forms'
            target='_blank'
            size='large'
          >
            <span>REGISTRATE AHORA</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default function MainBanner() {
  const swiperElRef = useRef(null);

  const scrollVariants = {
    offscreen: {
      y: -100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className='main-animation'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.6 }}
      variants={scrollVariants}
    >
      <swiper-container
        ref={swiperElRef}
        centered-slides='true'
        autoplay-delay='3000'
        autoplay-disable-on-interaction='false'
        pagination-clickable='true'
        navigation='false'
        class='main-banner'
        id='main-banner'
      >
        <swiper-slide>
          <IdiomaSpotStep />
        </swiper-slide>
        <swiper-slide>
          <RewardsStep />
        </swiper-slide>
      </swiper-container>
    </motion.div>
  );
}
