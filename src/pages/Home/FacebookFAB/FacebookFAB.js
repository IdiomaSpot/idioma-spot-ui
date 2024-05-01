import React from 'react';
import './FacebookFAB.scss';
import { Button } from '@mui/material';

export default function FacebookFAB() {

    return <>
        <Button
            className='messenger-fab'
            variant='text'
            href='https://docs.google.com/forms'
            target='_blank'
            size='medium'
        >
            <img src={require('../../../assets/icons/fb-messenger-icon.png')} alt='messenger-icon' className='icon'></img>
        </Button>
    </>

}