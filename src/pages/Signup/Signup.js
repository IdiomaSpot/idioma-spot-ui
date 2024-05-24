import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Signup.scss';
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Typography,
  Divider,
  Alert,
} from '@mui/material';
import avatar from '../../assets/img/avatar.png';
import useSignRequest from '../../hooks/useSignRequests';
import {
  Copyright,
  LoadingPage,
  Notification,
  PasswordInput,
} from '../../components/ui';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [{ data, isLoading, hasError, errorMessage }, setRequest] =
    useSignRequest();
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    type: 'error',
  });
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const someEmpty = (dataForm) =>
    dataForm.get('email').length === 0 ||
    dataForm.get('password').length === 0 ||
    dataForm.get('name').length === 0 ||
    dataForm.get('surname').length === 0 ||
    dataForm.get('phone').length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);

    if (someEmpty(dataForm)) {
      setNotification({
        type: 'error',
        message: 'Hay campos faltantes, llenalos antes de continuar.',
        open: true,
      });
      return;
    }
    setRequest({
      type: 'signup',
      data: {
        email: dataForm.get('email'),
        password: dataForm.get('password'),
        name: dataForm.get('name'),
        surname: dataForm.get('surname'),
        phone: dataForm.get('phone'),
        role: 'student',
      },
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (hasError) {
        setNotification({
          type: 'error',
          message: 'Ocurrió un error, intente de nuevo más tarde.',
          open: true,
        });
      } else if (data) {
        setNotification({
          type: 'success',
          message: 'Registro exitoso ¡Bienvenido a Idioma Spot!',
          open: true,
        });
        navigate('/login');
      }
    }
  }, [isLoading, hasError, errorMessage, data, dispatch, navigate]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };
  const handleChange = (event) => {
    const validatedValue = event.target.value.replace(/[^0-9]/g, '');
    if (validatedValue.length <= 10) {
      setPhone(validatedValue);
    }
  };
  return (
    <div className='signup'>
      <LoadingPage openOn={isLoading} />
      <Notification
        text={notification.message}
        type={notification.type}
        open={notification.open}
        onClose={handleClose}
      />
      <Paper elevation={6} square className='signup-container'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}
            alt='Idioma Spot'
            src={avatar}
            className='signup-avatar'
          />
          <Typography component='h1' variant='h5'>
            Registrate en Idioma Spot!
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin='dense'
              required
              fullWidth
              id='name'
              label='Nombre(s)'
              name='name'
              autoComplete='name'
              autoFocus
            />
            <TextField
              margin='dense'
              required
              fullWidth
              id='surname'
              label='Apellido(s)'
              name='surname'
              autoComplete='surname'
              autoFocus
            />
            <TextField
              margin='dense'
              required
              fullWidth
              id='phone'
              label='Teléfono'
              name='phone'
              autoComplete='phone'
              autoFocus
              value={phone}
              onChange={handleChange}
            />
            <TextField
              margin='dense'
              required
              fullWidth
              id='email'
              label='Correo electrónico'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <PasswordInput />
            <Alert severity='warning' sx={{ marginTop: 1 }}>
              Antes de registrarte verifica que tu información sea correcta
            </Alert>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='success'
              sx={{ mt: 2, mb: 2 }}
            >
              Registrate
            </Button>
            <Divider />
            <Button
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 2, mb: 2 }}
            >
              <RouterLink to='/login' className='button-text'>
                Iniciar sesión
              </RouterLink>
            </Button>
            <Copyright sx={{}} />
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

Signup.defaultProps = {};

Signup.propTypes = {};

export default Signup;
