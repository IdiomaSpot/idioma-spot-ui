import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import './SignMenu.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../../context/features/user/userSlice';

const SignMenu = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStudentDashboard = () => {
    handleClose();
    navigate('/student');
  };
  const handleLogin = () => {
    handleClose();
    navigate('/login');
  };
  const handleLogout = () => {
    handleClose();
    sessionStorage.clear();
    console.log(sessionStorage);
    dispatch(resetUser());
    navigate('/login');
  };

  const signInMenu = () => (
    <div className='sign-menu'>
      <IconButton
        id='demo-positioned-button'
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PersonIcon fontSize='large' />
      </IconButton>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogin}>Inicia sesión</MenuItem>
      </Menu>
    </div>
  );

  const signedMenu = () => {
    const { name, surname } = user;
    return (
      <div className='sign-menu'>
        <IconButton
          id='demo-positioned-button'
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar
            className='sign-menu__avatar'
            alt={name}
            sx={{ width: 40, height: 40, bgcolor: user.color }}
          >
            {name.charAt(0) + surname.charAt(0)}
          </Avatar>
        </IconButton>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleStudentDashboard}>
            Tablero de estudiantes
          </MenuItem>
          <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
        </Menu>
      </div>
    );
  };
  return user.email ? signedMenu() : signInMenu();
};

export default SignMenu;
