import React from 'react';
import './MainBanner.scss';
import { Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MainBanner() {
    return (
        <>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="main-banner"
            >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}