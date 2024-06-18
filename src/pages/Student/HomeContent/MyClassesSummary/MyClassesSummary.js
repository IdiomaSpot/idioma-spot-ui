import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import mockClasses from '../../../../data/mockAvailableClassesSummary.json';
import PropTypes from 'prop-types';
import { createPrimaryText } from '../../../../utils/utils';
import './MyClassesSummary.scss';
import { useNavigate } from 'react-router-dom';
import MyClassItem from '../../ClassesContent/MyClassItem';
import subscribeImg from '../../../../assets/img/subscribe.jpg';

const MyClassesSummary = ({ classes }) => {
  const navigate = useNavigate();
  const secondaryText = (cl) => 'Inicio: ' + cl.startDate + ' ...';
  return (
    <Paper elevation={3} className='summary-class'>
      {classes ? (
        <Box className='summary-class-container'>
          <Typography className='title' variant='h5'>
            Últimas clases inscritas:
          </Typography>
          <List className='summary-class-list'>
            <div className='padding-list'>
              {classes.map((cl) => (
                <MyClassItem
                  key={cl.id + '-item'}
                  primaryText={createPrimaryText(cl)}
                  secondaryText={secondaryText(cl)}
                />
              ))}
            </div>
          </List>
          <ListItemButton
            className='summary-class-button'
            onClick={() => navigate('/student/my-classes')}
          >
            <ListItemText primary='VER MÁS...' />
          </ListItemButton>
        </Box>
      ) : (
        <Card className='subscribe'>
          <CardMedia
            className='subscribe-media'
            image={subscribeImg}
            title='green iguana'
          />
          <CardContent className='subscribe-content'>
            <Typography gutterBottom variant='h6'>
              Aún no estás inscrito a ninguna clase
            </Typography>
          </CardContent>
          <CardActions className='actions-subscribe'>
            <Button
              className='button-subscribe button-text'
              onClick={() => navigate('/student/enrollment')}
            >
              INSCRIBETE AHORA!
            </Button>
          </CardActions>
        </Card>
      )}
    </Paper>
  );
};

MyClassesSummary.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
};
MyClassesSummary.defaultProps = {
  classes: mockClasses,
};

export default MyClassesSummary;
