import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';

const Notification = ({ type, text, open, onClose }) => {
  const defaultMessage =
    type === 'error'
      ? 'Ha ocurrido un error, intente de nuevo más tarde.'
      : 'Operación realizada con éxito.';
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant='filled'
        sx={{ width: '100%' }}
      >
        {text || defaultMessage}
      </Alert>
    </Snackbar>
  );
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
Notification.defaultProps = {
  text: '',
};
export default Notification;
