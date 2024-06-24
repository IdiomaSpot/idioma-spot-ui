import {
  Box,
  Button,
  Container,
  List,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyClassItem from './MyClassItem';
import { createPrimaryText, createSecundaryText } from '../../../utils/utils';
import './ClassesContent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeContent } from '../../../context/features/student/studentSlice';
import { getMenuOption } from '../../../data/studentsMenu';
import { useEffectOnce } from '../../../hooks/useEffectOnce';
import useStudentRequest from '../../../hooks/useStudentRequest';
import { LoadingPage, Notification } from '../../../components/ui';

const ClassesContent = () => {
  const dispatch = useDispatch();
  const [{ data: classes, isLoading, hasError, errorMessage }, setRequest] =
    useStudentRequest();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption('my-classes')));
    if (user?.id) {
      setRequest({
        type: 'enrolled-classes',
        data: {
          userId: user?.id,
        },
      });
    }
  });

  useEffect(() => {
    if (hasError) {
      setOpen(true);
    }
  }, [hasError, errorMessage]);

  const goTo = (url) => {
    window.open(url, '_blank');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <LoadingPage openOn={isLoading} />
      {!isLoading && (
        <Container>
          <Notification type={'error'} open={open} onClose={handleClose} />
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
              {classes?.length ? (
                classes.map((cl) => (
                  <MyClassItem
                    key={cl.id + '-item'}
                    primaryText={createPrimaryText(cl)}
                    secondaryText={createSecundaryText(cl)}
                    onClick={() => {
                      goTo(cl.link);
                    }}
                    bg
                  />
                ))
              ) : (
                <ListItemText
                  className='not-enrolled gray-bg'
                  primary='No te has inscrito a ninguna clase'
                />
              )}
            </List>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ClassesContent;
