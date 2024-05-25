import * as React from 'react';
import './MenuBar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Drawer } from '@mui/material';
import logoText from '../../../assets/img/logo-text-white.png';
import SignMenu from '../../../components/ui/SignMenu/SignMenu';
import { useSelector } from 'react-redux';

const pages = [
  { name: 'Inicio', target: 'main-banner' },
  { name: 'Promociones', target: 'promos-section' },
  { name: 'Ventajas', target: 'advantages-section' },
  { name: '¿Por qué IS?', target: 'whyus-section' },
  { name: 'Clases', target: 'offers-section' },
  { name: 'Misión y Visión', target: 'mission-vision-section' },
  { name: 'Metodología IIS', target: 'methodology-section' },
  { name: 'Contacto', target: 'contact-section' },
];

function MenuBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const user = useSelector((state) => state.user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOnSelectedItem = (page) => {
    const section = document.querySelector(`#${page.target}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    handleCloseNavMenu();
  };

  return (
    <AppBar position='fixed' id='menu-bar'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {logoText ? (
            <img
              className='logo-img-bigscreen'
              alt='IdomaSpot'
              src={logoText}
            />
          ) : (
            <Typography
              variant='h6'
              noWrap
              component='a'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'inherit',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              IdiomaSpot
            </Typography>
          )}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              className='side-menu'
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleOnSelectedItem(page)}
                >
                  <Typography textAlign='center'>{page.name}</Typography>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
          {logoText ? (
            <div className='image-container'>
              <img
                className='logo-img-small'
                alt='IdomaSpot'
                src={logoText}
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                }}
                href='#app-bar-with-responsive-menu'
              />
            </div>
          ) : (
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              IdiomaSpot
            </Typography>
          )}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleOnSelectedItem(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <SignMenu user={user.data} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MenuBar;
