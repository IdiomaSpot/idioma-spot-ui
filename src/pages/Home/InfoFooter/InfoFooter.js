import React from 'react';
import './InfoFooter.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const InfoFooter = () => {
  return (
    <footer id='contact-section'>
      <h3>CONTACTANOS</h3>
      <ul className='contact-info-list'>
        <li className='phone'>
          <div className='list-container'>
            <div>
              <PhoneIcon fontSize='small' /> {'  '}
              <span>Llamanos</span>
            </div>
            <span>221-425-56-38</span>
            <span>565-858-00-66</span>
          </div>
        </li>
        <li className='email'>
          <div className='list-container'>
            <div>
              <EmailIcon fontSize='small' /> <span>Envíanos un e-mail</span>
            </div>
            <a className='link-color' href='mailto:idiomaspot@gmail.com'>
              idiomaspot@gmail.com
            </a>
          </div>
        </li>
        <li className='whatsapp'>
          <div className='list-container'>
            <div>
              <AiOutlineWhatsApp className='whatsapp-icon' /> Chatea con
              nosotros
            </div>
            <a
              className='link-color'
              href='https://wa.me/2214255638'
              target='_blank'
              rel='noreferrer'
            >
              221-425-56-38
            </a>
            <a className='link-color' href='https://wa.me/5658580066'>
              565-858-00-66
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default InfoFooter;
