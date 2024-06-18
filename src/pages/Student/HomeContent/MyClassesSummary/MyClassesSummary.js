import {
  Box,
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

const MyClassesSummary = ({ classes }) => {
  const navigate = useNavigate();
  const secondaryText = (cl) => 'Inicio: ' + cl.startDate + ' ...';
  return (
    <Paper elevation={3} className='summary-class'>
      <Typography className='title' variant='h5'>
        Últimas clases inscritas:
      </Typography>
      <Box className='summary-class-container'>
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
          <ListItemButton
            className='summary-class-button'
            onClick={() => navigate('/student/my-classes')}
          >
            <ListItemText primary='VER MÁS...' />
          </ListItemButton>
        </List>
      </Box>
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
