import { Paper } from '@mui/material';
import './IsPointsSummary.scss';

const IsPointsSummary = ({ points }) => {
  return (
    <Paper className='is-points-summary'>
      <span className='is-points-title small-title'>
        Estos son tus puntos Idioma Spot
      </span>
      <h1>{points}</h1>
    </Paper>
  );
};
export default IsPointsSummary;
