import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@mui/material';

const LoadingPage = ({ openOn }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (openOn) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [openOn]);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
LoadingPage.propTypes = {
  openOn: PropTypes.bool.isRequired,
};

export default LoadingPage;
