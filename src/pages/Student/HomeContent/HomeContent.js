import React from 'react';
import IsPointsSummary from './IsPointsSummary/IsPointsSummary';
import { useSelector } from 'react-redux';
import MyClassesSummary from './MyClassesSummary/MyClassesSummary';
import { Grid } from '@mui/material';

const HomeContent = () => {
  const student = useSelector((state) => state.student);
  const args = {
    justifyContent: 'center',
    justifyItems: 'center',
    display: 'flex',
    'align-items': 'center',
  };
  return (
    <>
      {' '}
      <p>Home Page</p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} {...args}>
          <IsPointsSummary points={student.isPoints} />
        </Grid>
        <Grid item xs={12} sm={6} {...args}>
          <MyClassesSummary />
        </Grid>
      </Grid>
    </>
  );
};

export default HomeContent;
