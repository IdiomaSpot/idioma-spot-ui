import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import './SignMenu.scss';

const SignMenu = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    // would it even be a profile page???
  };
  const handleStudentDashboard = () => {
    handleClose();
    // send to student dashboard -> I need router installed
  };
  const handleLogout = () => {
    handleClose();
    // clear sessionStorage and clear global state -> need redux
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
        <MenuItem onClick={handleClose}>Inicia sesión</MenuItem>
      </Menu>
    </div>
  );

  const signedMenu = () => {
    const { name } = user;
    return (
      <div className='sign-menu'>
        <IconButton
          id='demo-positioned-button'
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar alt={name} sx={{ width: 56, height: 56 }}>
            {name}
          </Avatar>
        </IconButton>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleProfile}>Pérfil</MenuItem>
          <MenuItem onClick={handleStudentDashboard}>
            Tablero de estudiantes
          </MenuItem>
          <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
        </Menu>
      </div>
    );
  };
  return user ? signedMenu() : signInMenu();
};

export default SignMenu;
