import { useEffect, useState } from 'react';
import './StudentDashboard.scss';

import { DashboardMenu } from '../../components/ui';
import { optionsMenu as menuOptions } from '../../data/studentsMenu';
import { useDispatch, useSelector } from 'react-redux';
import useStudentRequest from '../../hooks/useStudentRequest';
import { setIsPoints } from '../../context/features/student/studentSlice';
import { Outlet } from 'react-router-dom';

const StudentDashboard = () => {
  const user = useSelector((state) => state.user);
  const [points, setPoints] = useState(0);
  const [{ data, isLoading, hasError, errorMessage }, setRequest] =
    useStudentRequest();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student);

  useEffect(() => {
    if (user?.email) {
      setRequest({
        type: 'points',
        data: {
          email: user?.email,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (hasError) {
        setPoints(0);
      } else if (data) {
        setPoints(data.points);
        dispatch(setIsPoints(data.points));
      }
    }
  }, [isLoading, hasError, errorMessage, data, dispatch]);

  return (
    <DashboardMenu
      menuOptions={menuOptions}
      user={user}
      points={points}
      content={student.content}
    >
      <Outlet />
    </DashboardMenu>
  );
};

export default StudentDashboard;
