import React from 'react';
import PropTypes from 'prop-types';
import './PromosSection.scss';
import { Button } from '@mui/material';
import imagePromoUrl from '../../../assets/images/promoImg2.png';

const PromosSection = ({ title, text, imgUrl }) => {
  return (
    <div className='promos-section'>
      <div className='promos-container'>
        <div className='promos-tittle'>{title}</div>
        <div className='promos-text space-between'>{text}</div>
        <Button className='promos-button' size='large' variant='contained'>
          REGISTRARSE
        </Button>
      </div>
      <div className='promos-img-container'>
        <img className='promos-img' src={imgUrl} alt='current promotion'></img>
      </div>
    </div>
  );
};

PromosSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imgUrl: PropTypes.string,
};
PromosSection.defaultProps = {
  title: 'OBTEN DESCUENTOS Y PROMOCIONES',
  text:
    'Para obtener promociones es muy sencillo solo tienes que registrarte y te llegaran a tu correo cada nueva promoción disponible o en tu panel' +
    ' principal podrás ver las promociones disponibles, recuerda que puedes invitar a tus amigos y ganar $100 pesos cada que uno de ellos se registren' +
    ' e inicien un curso.',
  imgUrl: imagePromoUrl,
};

export default PromosSection;
