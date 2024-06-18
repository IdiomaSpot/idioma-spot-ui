import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';
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
import { setClassScheduleId } from '../../../../context/features/enrollment/enrollmentSlice';
import {
  createPrimaryText,
  createSecundaryText,
} from '../../../../utils/utils';

const ClassSchedules = ({ handleNext }) => {
  const [{ data, isLoading, hasError, errorMessage }, setFetch] = useFetch();
  const enrollment = useSelector((state) => state.enrollment);
  const dispatch = useDispatch();

  const getClassSchedules = useCallback(
    ({ classType }) => {
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

  useEffect(() => {
    if (!isLoading) {
      if (hasError) {
        console.error('AN ERROR HAD OCURRED', errorMessage);
      }
    }
  }, [isLoading, hasError, errorMessage, data]);

  useEffect(() => {
    enrollment?.classType &&
      getClassSchedules({ classType: enrollment.classType });
  }, [enrollment, getClassSchedules]);

  function onScheduleSelected(selectedSchedule) {
    dispatch(setClassScheduleId({ classScheduleId: selectedSchedule.id }));
    handleNext();
  }

  return (
    <>
      <List sx={{ width: '100%' }}>
        {data?.map(
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
            const data = {
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
                key={data.id}
                secondaryAction={
                  <IconButton edge='end' aria-label='comments'>
                    <ArrowForwardIosIcon />
                  </IconButton>
                }
                disablePadding
                onClick={() => !data.isFull && onScheduleSelected(data)}
              >
                <ListItemButton
                  role={undefined}
                  disabled={data.isFull}
                  divider={true}
                  selected={true}
                >
                  <ListItemText
                    primaryTypographyProps={{ component: 'div' }}
                    secondaryTypographyProps={{ component: 'div' }}
                    primary={createPrimaryText(data)}
                    secondary={createSecundaryText(data)}
                  />
                </ListItemButton>
              </ListItem>
            );
          }
        )}
      </List>
    </>
  );
};

export default ClassSchedules;
