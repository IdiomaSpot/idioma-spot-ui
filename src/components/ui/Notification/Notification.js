import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';

const Notification = ({ type, text, open, onClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
    <Alert
      onClose={onClose}
      severity={type}
      variant='filled'
      sx={{ width: '100%' }}
    >
      {text}
    </Alert>
  </Snackbar>
);

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
Notification.defaultProps = {};
export default Notification;
