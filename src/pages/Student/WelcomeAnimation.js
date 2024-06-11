import { CardMedia } from '@mui/material';
import welcomeVid from '../../../assets/videos/welcome.mp4';

const WelcomeAnimation = () => (
  <CardMedia
    component='video'
    className='welcome-animation'
    image={welcomeVid}
    autoPlay
  />
);
