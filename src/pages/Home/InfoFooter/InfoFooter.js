import React from 'react';
import './InfoFooter.scss';

const InfoFooter = () => {
  return (
    <footer id='contact-section'>
      <h3>CONTACTANOS</h3>
      <ul className='contact-info-list'>
        <li className='phone'>
          <b>Phone:</b>{' '}
          <a className='link-color' href='tel:2214255638'>
            2214255638
          </a>
        </li>
        <li className='email'>
          <b>Email:</b>{' '}
          <a className='link-color' href='mailto:idiomaspot@gmail.com'>
            idiomaspot@gmail.com
          </a>
        </li>
        <li className='whatsapp'>
          <b>Whatsapp:</b>{' '}
          <a className='link-color' href='https://wa.me/2214255638' target='_blank' rel='noreferrer'>
            2214255638
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default InfoFooter;