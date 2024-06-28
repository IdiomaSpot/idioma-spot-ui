import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import './DashboardMenu.scss';

import IsPoints from '../IsPoints/IsPoints';
import SignMenu from '../SignMenu/SignMenu';
import SideMenu from '../SideMenu/SideMenu';
import { useState } from 'react';

const DashboardMenu = ({
  menuOptions,
  user,
  points = 0,
  content,
  children,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const drawerWidth = 240;

  const isAdmin = user.role === 'admin';

  return (
    <Box sx={{ display: 'flex' }} className='menu-dashboard'>
      <CssBaseline />
      <AppBar
        className='bar-menu'
        position='fixed'
        sx={{
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label='menu'
            sx={{ display: { xs: 'initial', md: 'none' } }}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className='title-menu'
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, paddingLeft: 2, textAlign: 'left' }}
          >
            {content.name || 'Inicio'}
          </Typography>
          {!isAdmin && <IsPoints total={points.toString()} />}
          <SignMenu user={user} />
        </Toolbar>
      </AppBar>
      <SideMenu
        width={drawerWidth}
        options={menuOptions}
        open={openMenu}
        setOpen={setOpenMenu}
        role={user.role}
      />
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
DashboardMenu.propTypes = {
  points: PropTypes.number,
  menuOptions: PropTypes.array,
  user: PropTypes.shape({}),
  content: PropTypes.shape({}),
};
DashboardMenu.defaultProps = {
  points: 0,
};
export default DashboardMenu;
