import React, { useState } from 'react';
import './DifferencesSection.scss';
import { Paper } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Difference = ({
  id = 0,
  title = 'test',
  text = 'The Slide component also accepts container prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node.',
  changeColor = false,
}) => {
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

export default Difference;
