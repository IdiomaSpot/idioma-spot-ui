import React from 'react';
import { Link } from 'react-router-dom';

const ClassesContent = () => {
  return (
    <>
      {' '}
      <p>My classes</p> <Link to='/student/enrollment'>Go to enrollment</Link>
    </>
  );
};

export default ClassesContent;
