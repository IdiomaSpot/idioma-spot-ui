import React, { useState } from 'react';
import './StudentDashboard.scss';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SideMenu, SignMenu } from '../../components/ui';
import menuOptions from '../../data/studentsMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const StudentDashboard = () => {
  const [content, setContent] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <Box sx={{ display: 'flex' }} className='student-dashboard'>
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
            sx={{ flexGrow: 1 }}
          >
            {content.name || 'Inicio'}
          </Typography>
          <SignMenu user={user} />
        </Toolbar>
      </AppBar>
      <SideMenu
        width={drawerWidth}
        options={menuOptions}
        setSelectedContent={setContent}
        open={openMenu}
        setOpen={setOpenMenu}
      />
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default StudentDashboard;
