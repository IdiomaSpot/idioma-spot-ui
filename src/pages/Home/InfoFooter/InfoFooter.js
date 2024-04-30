import React from 'react';
import './InfoFooter.scss';

const InfoFooter = () => {
  return (
    <footer>
      <ul className='contact-info-list'>
        <li className='phone'>
          <b>Phone:</b>{' '}
          <a className='link-color' href='tel:2225257987'>
            2225257987
          </a>
        </li>
        |
        <li className='email'>
          <b>Email:</b>{' '}
          <a className='link-color' href='mailto:idiomaspot@gmail.com'>
            idiomaspot@gmail.com
          </a>
        </li>
        |
        <li className='whatsapp'>
          <b>Whatsapp:</b>{' '}
          <a className='link-color' href='https://wa.me/2225257987'>
            2225257987
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default InfoFooter;
