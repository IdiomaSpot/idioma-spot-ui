import { Box, Button, Container, List, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import mockClasses from '../../../data/mockAvailableClasses.json';
import MyClassItem from './MyClassItem';
import { createPrimaryText, createSecundaryText } from '../../../utils/utils';
import './ClassesContent.scss';
const ClassesContent = () => {
  const goTo = (url) => {
    window.open(url, '_blank');
  };
  return (
    <Container>
      <div className=' my-classes-header'>
        <Typography variant='h4' className='title'>
          Clases inscritas:
        </Typography>
        <Button className='enrollment-button' variant='contained'>
          <Link className='button-text' to='/student/enrollment'>
            Inscribete
          </Link>
        </Button>
      </div>
      <Box className='my-classes-table-container'>
        <List className='my-classes-table'>
          {mockClasses.map((cl) => (
            <MyClassItem
              key={cl.id + '-item'}
              primaryText={createPrimaryText(cl)}
              secondaryText={createSecundaryText(cl)}
              onClick={() => {
                goTo(cl.link);
              }}
              bg
            />
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ClassesContent;
