import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveToken,
  saveUser,
  saveUserColor,
} from '../../context/features/user/userSlice';
import './Login.scss';
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Typography,
  Divider,
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

const Login = () => {
  const [{ data, isLoading, hasError, errorMessage }, setRequest] =
    useSignRequest();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const student = useSelector((state) => state.student);

  const notificationMessage = (error) =>
    error
      ? 'Error, usuario y/o contraseña incorrectos'
      : 'Bienvenido de vuelta!';

  const someEmpty = (dataForm) =>
    dataForm.get('email').length === 0 || dataForm.get('password').length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    if (someEmpty(dataForm)) {
      return;
    }
    setRequest({
      type: 'login',
      data: {
        email: dataForm.get('email'),
        password: dataForm.get('password'),
      },
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (hasError) {
        setOpen(true);
      } else if (data) {
        setOpen(true);
        dispatch(saveToken(data.accessToken));
        const { id, email, name, role, surname } = data.user;
        dispatch(
          saveUser({
            id,
            email,
            name,
            surname,
            role,
          })
        );
        const randomColor =
          '#' + (((1 << 24) * Math.random()) | 0).toString(16);
        dispatch(saveUserColor(randomColor));
        if (role === 'admin') {
          navigate('/admin');
        } else {
          if (student?.selectedOffer) {
            navigate('/student/enrollment');
          } else {
            navigate('/student');
          }
        }
      }
    }
  }, [
    isLoading,
    hasError,
    errorMessage,
    data,
    navigate,
    dispatch,
    student?.selectedOffer,
  ]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className='login'>
      <LoadingPage openOn={isLoading} />
      <Notification
        text={notificationMessage(hasError)}
        type={hasError ? 'error' : 'success'}
        open={open}
        onClose={handleClose}
      />

      <Paper elevation={6} square className='login-container'>
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
            className='login-avatar'
          />
          <Typography component='h1' variant='h5'>
            Bienvenido a Idioma Spot!
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              error={hasError}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Correo electrónico'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <PasswordInput />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Divider />
            <Button
              type='button'
              fullWidth
              variant='contained'
              color='success'
              sx={{ mt: 3, mb: 2 }}
            >
              <RouterLink to='/signup' className='button-text'>
                ¡Registrate!
              </RouterLink>
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

Login.defaultProps = {};

Login.propTypes = {};

export default Login;
