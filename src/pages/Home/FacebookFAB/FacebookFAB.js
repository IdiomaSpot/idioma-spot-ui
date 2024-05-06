import React from 'react';
import './FacebookFAB.scss';
import { Button } from '@mui/material';

export default function FacebookFAB() {

    return <>
        <Button
            className='messenger-fab'
            variant='text'
            href='https://m.me/335938772926240'
            target='_blank'
            size='medium'
        >
            <img src={require('../../../assets/icons/fb-messenger-icon.png')} alt='messenger-icon' className='icon'></img>
        </Button>
    </>

}