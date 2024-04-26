import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Advantage.scss';
import { Paper } from '@mui/material';

const Advantage = ({ id, title, text, changeColor, icon }) => {
  const [elevation, setElevation] = useState(3);
  const color = changeColor ? '#103c93' : '#30c4b4';

  const overHandler = (event) => {
    setElevation(7);
    event.stopPropagation();
  };
  const leaveHandler = (event) => {
    setElevation(3);
    event.stopPropagation();
  };

  return (
    <Paper
      className='Advantage-content'
      elevation={elevation}
      onMouseOver={overHandler}
      onMouseLeave={leaveHandler}
      style={{ backgroundColor: color }}
    >
      <h2 className={`Advantage-title ${id}`}>{title}</h2>
      <div className={`Advantage-text ${id}`}>{text}</div>
    </Paper>
  );
};

Advantage.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  changeColor: PropTypes.bool,
  icon: PropTypes.element,
};
Advantage.defaultProps = {
  id: 0,
  title: 'test',
  text: 'The Slide component also accepts container prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node.',
  changeColor: false,
  icon: <></>,
};

export default Advantage;
