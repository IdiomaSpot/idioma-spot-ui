import React from 'react';
import './MainBanner.scss';
import { Button } from '@mui/material';

export default function MainBanner() {
    return (
        <>
            <div className='main-banner'>
                <h1>IDIOMA SPOT</h1>
                <Button variant="contained" href="https://docs.google.com/forms" target='_blank' size='large'>
                    <span>EVALUA TU DOMINIO DEL IDIOMA</span>
                </Button>
            </div>
        </>
    )
}