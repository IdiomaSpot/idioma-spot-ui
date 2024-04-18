import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DifferencesSection.scss';
import { Paper } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Difference = ({ id, title, text, changeColor }) => {
  const [elevation, setElevation] = useState(3);
  const color = changeColor ? '#FF0062' : '#0099FF';

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
      className='Difference-content'
      elevation={elevation}
      onMouseOver={overHandler}
      onMouseLeave={leaveHandler}
      style={{ backgroundColor: color }}
    >
      <AutoStoriesIcon className={`Difference-icon ${id}`} fontSize='medium' />
      <h2 className={`Difference-tittle ${id}`}>{title}</h2>
      <div className={`Difference-text ${id}`}>{text}</div>
    </Paper>
  );
};

Difference.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  changeColor: PropTypes.bool,
  lable: PropTypes.string,
};
Difference.defaultProps = {
  id: 0,
  title: 'test',
  text: 'The Slide component also accepts container prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node.',
  changeColor: false,
};

export default Difference;
