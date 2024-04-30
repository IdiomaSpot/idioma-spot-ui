import SchoolIcon from '@mui/icons-material/School';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ExtensionIcon from '@mui/icons-material/Extension';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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

export default getAdvantagesIcon;
