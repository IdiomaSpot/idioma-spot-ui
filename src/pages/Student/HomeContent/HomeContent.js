import { AnimatedTextWord } from '../../../components/ui';
import React from 'react';
import IsPointsSummary from './IsPointsSummary/IsPointsSummary';
import { useDispatch, useSelector } from 'react-redux';
import MyClassesSummary from './MyClassesSummary/MyClassesSummary';
import { Box, Grid } from '@mui/material';
import './HomeContent.scss';
import student1 from '../../../assets/img/student1.png';
import { motion } from 'framer-motion';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import { changeContent } from '../../../context/features/student/studentSlice';
import { getMenuOption } from '../../../data/studentsMenu';

const HomeContent = () => {
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const args = {
    justifyContent: 'center',
    justifyItems: 'center',
    display: 'flex',
    'align-items': 'center',
  };

  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('home')));
  });

  return (
    <div className='home-content'>
      <Box display={{ xs: 'none', sm: 'flex' }} className='home-title'>
        <AnimatedTextWord text='¡Bienvenido a Idioma Spot!' />
      </Box>
      <Box display={{ xs: 'flex', sm: 'none' }} className='home-title'>
        <AnimatedTextWord text='¡Bienvenido a' />
        <AnimatedTextWord text=' Idioma Spot!' />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} {...args}>
          <MyClassesSummary />
        </Grid>
        <Grid className='column-display' item xs={12} sm={6} {...args}>
          <IsPointsSummary points={student.isPoints} />
          <motion.img
            className='home-img'
            src={student1}
            alt='estudiante idioma spot'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContent;
