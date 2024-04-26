import React from 'react';
import PropTypes from 'prop-types';
import './AdvantagesSection.scss';
import advantagesText from '../../../data/advantages.json';
import Advantage from './Advantage';
import { Container } from '@mui/material';

const tittleAdvantages = Object.keys(advantagesText)[0];
const textObjArr = advantagesText[tittleAdvantages];

const AdvantagesSection = ({ tittle, array }) => {
  const getAdvantages = () => {
    let changeColor = false;
    return array.map((obj, index) => {
      changeColor = !changeColor;
      const text1 = Object.keys(obj)[0];
      const text2 = obj[text1];

      return (
        <Advantage
          id={`advantage-${index}`}
          title={text1}
          text={text2}
          changeColor={changeColor}
        ></Advantage>
      );
    });
  };
  return (
    <div className='advantages-section'>
      <Container maxWidth='lg'>
        <div className='advantages-tittle'>
          <h1>{tittle}</h1>
        </div>
        <div className='advantages-body'>{getAdvantages()}</div>
      </Container>
    </div>
  );
};

AdvantagesSection.propTypes = {
  tittle: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.shape({})),
};

AdvantagesSection.defaultProps = {
  tittle: tittleAdvantages,
  array: textObjArr,
};

export default AdvantagesSection;
