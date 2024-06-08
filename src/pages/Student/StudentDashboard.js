import React, { useEffect, useState } from 'react';
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
import { IsPoints, SideMenu, SignMenu } from '../../components/ui';
import menuOptions from '../../data/studentsMenu';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import useStudentRequest from '../../hooks/useStudentRequest';
import { setIsPoints } from '../../context/features/student/studentSlice';

const drawerWidth = 240;

const StudentDashboard = () => {
  const [content, setContent] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const [points, setPoints] = useState(0);
  const [{ data, isLoading, hasError, errorMessage }, setRequest] =
    useStudentRequest();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.email) {
      setRequest({
        type: 'points',
        data: {
          email: user?.email,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (hasError) {
        setPoints(0);
      } else if (data) {
        setPoints(data.points);
        dispatch(setIsPoints(data.points));
      }
    }
  }, [isLoading, hasError, errorMessage, data, dispatch]);

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
            sx={{ flexGrow: 1, paddingLeft: 2, textAlign: 'left' }}
          >
            {content.name || 'Inicio'}
          </Typography>
          <IsPoints total={points} />
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
