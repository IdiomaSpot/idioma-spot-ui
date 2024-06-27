import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';
import { useEffectOnce } from '../../../../hooks/useEffectOnce';
import {
  IDIOMA_SPOT_API,
  CLASS_TYPE,
  HEADERS,
} from '../../../../data/constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { setClassSchedule } from '../../../../context/features/enrollment/enrollmentSlice';
import {
  createPrimaryText,
  createSecundaryText,
} from '../../../../utils/utils';
import './ClassSchedules.scss';
import { LoadingPage, Notification } from '../../../../components/ui';

const ClassSchedules = ({ handleNext }) => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [{ data, isLoading, hasError, errorMessage }, setFetch] = useFetch();
  const enrollment = useSelector((state) => state.enrollment);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [requestType, setRequestType] = useState(null);
  const [classSchedules, setClassSchedules] = useState(null);
  const [openNotification, setOpenNotification] = useState(false);
  const [textNotification, setTextNotification] = useState(
    'Ya te encuentras inscrito a la clase que intentas seleccionar'
  );

  const getClassSchedules = useCallback(
    ({ classType }) => {
      setRequestType('GET_CLASS_SCHEDULES');
      setFetch({
        url: `${IDIOMA_SPOT_API}/class-schedules/${CLASS_TYPE[classType]}`,
        options: {
          mode: 'cors',
          method: 'get',
          headers: HEADERS,
        },
      });
    },
    [setFetch]
  );

  const validateSelection = useCallback(
    (classSchedule) => {
      setRequestType('VALIDATE_SELECTION');
      setFetch({
        url: `${IDIOMA_SPOT_API}/student/classes/validate?studentId=${user.id}&classType=${enrollment.classType}&classScheduleId=${classSchedule.id}`,
        options: {
          mode: 'cors',
          method: 'get',
          headers: HEADERS,
        },
      });
    },
    [enrollment.classType, user.id, setRequestType, setFetch]
  );

  useEffect(() => {
    if (!isLoading) {
      if (hasError) {
        setTextNotification('Ha ocurrido un error. Intenta de nuevo más tarde.');
        setOpenNotification(true);
      } else {
        if (requestType === 'GET_CLASS_SCHEDULES') {
          // Handle the response for getClassSchedules
          setClassSchedules(data);
        } else if (
          requestType === 'VALIDATE_SELECTION' &&
          data?.isAlredyEnrolled !== undefined
        ) {
          // Handle the response for validateSelection
          const isAlreadyEnrolled = data?.isAlredyEnrolled || false;
          setOpenNotification(isAlreadyEnrolled);
          !isAlreadyEnrolled && handleNext();
        }
      }
    }
  }, [isLoading, hasError, errorMessage, data, requestType, handleNext]);

  useEffectOnce(() => {
    enrollment?.classType &&
      getClassSchedules({ classType: enrollment.classType });
  }, [enrollment, getClassSchedules]);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
  }, []);

  function onScheduleSelected(selectedSchedule) {
    dispatch(
      setClassSchedule({
        classSchedule: selectedSchedule,
        classType: enrollment.classType,
      })
    );

    validateSelection(selectedSchedule);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenNotification(false);
    setTextNotification(
      'Ya te encuentras inscrito a la clase que intentas seleccionar'
    );
  };

  return (
    <>
      <Notification
        text={textNotification}
        type={'error'}
        open={openNotification}
        onClose={handleClose}
      />
      {loadingPage && <LoadingPage openOn={loadingPage} />}
      {!loadingPage && (
        <List sx={{ width: '100%' }}>
          {classSchedules?.length ? (
            classSchedules?.map(
              ({
                id,
                schedule,
                isAlmostFull,
                isFull,
                classLevel,
                startDate,
                hoursDuration,
                cost,
                ...rest
              }) => {
                const item = {
                  id,
                  schedule,
                  isAlmostFull,
                  isFull,
                  classLevel,
                  startDate,
                  hoursDuration,
                  cost,
                  ...rest,
                };

                return (
                  <ListItem
                    key={item.id}
                    secondaryAction={
                      <IconButton edge='end' aria-label='comments'>
                        <ArrowForwardIosIcon />
                      </IconButton>
                    }
                    disablePadding
                    onClick={() => !item.isFull && onScheduleSelected(item)}
                  >
                    <ListItemButton
                      role={undefined}
                      disabled={item.isFull}
                      divider={true}
                      selected={true}
                    >
                      <ListItemText
                        primaryTypographyProps={{ component: 'div' }}
                        secondaryTypographyProps={{ component: 'div' }}
                        primary={createPrimaryText(item)}
                        secondary={createSecundaryText(item)}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              }
            )
          ) : (
            <ListItemText
              className='not-enrolled gray-bg'
              primary='No hay clases disponibles'
            />
          )}
        </List>
      )}
    </>
  );
};

export default ClassSchedules;
