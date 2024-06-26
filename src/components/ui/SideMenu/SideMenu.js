import PropTypes from 'prop-types';
import './SideMenu.scss';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SideMenuOption from './SideMenuOption';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo-no_bg.png';

const SideMenu = ({ width, options, open, setOpen, role }) => {
  const navigate = useNavigate();
  const getMenuContent = (s) => (
    <>
      <Toolbar>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{
            flexGrow: 1,
            textAlign: 'left',
          }}
        >
          Menú
        </Typography>
        <IconButton
          aria-label='menu'
          sx={{
            display: { xs: 'initial', md: 'none' },
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {options.map((option) => (
          <SideMenuOption
            key={option.name}
            optionName={option.name}
            icon={option.icon}
            onClick={() => {
              navigate(`/${role}/` + option.type);
              setOpen(false);
            }}
          />
        ))}
      </List>
      <div className='logo-img-container'>
        <img alt='idioma spot logo' src={logo} />
      </div>
    </>
  );
  return (
    <>
      <Drawer
        sx={{
          display: { xs: 'none', md: 'initial' },
          width: width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: width,
            boxSizing: 'border-box',
          },
        }}
        variant={'permanent'}
        anchor='left'
        className='side-menu'
      >
        {getMenuContent()}
      </Drawer>
      <SwipeableDrawer
        className='side-menu'
        anchor='left'
        open={open}
        sx={{
          display: { xs: 'initial', md: 'none' },
          width: width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: width,
            boxSizing: 'border-box',
          },
        }}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
      >
        {getMenuContent()}
      </SwipeableDrawer>
    </>
  );
};

SideMenu.propTypes = {
  width: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.element,
      type: PropTypes.string,
    })
  ),
  setSelectedContent: PropTypes.func,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

SideMenu.defaultProps = {
  width: 200,
  options: [
    {
      name: '',
      icon: <></>,
      type: '',
    },
  ],
  setSelectedContent: () => {},
  open: false,
  setOpen: () => {},
};

export default SideMenu;
