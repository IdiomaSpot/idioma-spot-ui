import React from 'react';
import IsPointsSummary from './IsPointsSummary/IsPointsSummary';
import { useSelector } from 'react-redux';

const HomeContent = () => {
  const student = useSelector((state) => state.student);
  return (
    <>
      {' '}
      <p>Home Page</p>
      <IsPointsSummary points={student.isPoints} />
    </>
  );
};

export default HomeContent;
