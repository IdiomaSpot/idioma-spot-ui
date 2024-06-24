import SchoolIcon from '@mui/icons-material/School';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ExtensionIcon from '@mui/icons-material/Extension';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Grid, Typography } from '@mui/material';

const getAdvantagesIcon = (icon) => {
  switch (icon) {
    case 'Recompensas':
      return (
        <EmojiEventsIcon
          fontSize='large'
          className='Advantage-icon yellow-color'
        />
      );
    case 'Clases flexibles':
      return <SchoolIcon fontSize='large' className='Advantage-icon' />;
    case 'Programas flexibles':
      return (
        <HourglassBottomIcon fontSize='large' className='Advantage-icon' />
      );
    case 'Practica en tu tiempo libre':
      return <ScheduleIcon fontSize='large' className='Advantage-icon' />;
    case 'Sube de nivel':
      return <ExtensionIcon fontSize='large' className='Advantage-icon' />;
    default:
      return <AnalyticsIcon fontSize='large' className='Advantage-icon' />;
  }
};

const createPrimaryText = ({
  classLevel,
  schedule,
  isAlmostFull,
  isFull,
  classType,
}) => {
  const type = classType ? classType + ' - ' : '';
  const classes = classLevel || 'Nivel no disponible';
  const scheduleAvilable = schedule || 'Horario no disponible';
  const availability = isFull
    ? ' - cupo lleno'
    : isAlmostFull
    ? ' - ¡pocos lugares!'
    : '';
  return (
    <Typography sx={{ pb: 1 }}>
      <b>{type + classes}</b> {' - ' + scheduleAvilable + availability}
    </Typography>
  );
};

const createSecundaryText = ({ startDate, hoursDuration, cost }) => {
  const classInit = 'Inicio de clases: ' + (startDate || 'no disponible');
  const duration = 'Horas de estudio: ' + (hoursDuration || 'no disponibles');
  const costByClass = cost ? 'Costo: ' + cost : '';
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          {classInit}
        </Grid>
        <Grid item xs={6}>
          {duration}
        </Grid>
        <Grid item xs={6}>
          {costByClass}
        </Grid>
      </Grid>
    </>
  );
};
export { getAdvantagesIcon, createPrimaryText, createSecundaryText };
