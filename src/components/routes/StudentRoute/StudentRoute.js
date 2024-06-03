import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StudentRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== 'student') {
      console.log(user);
      navigate('/');
    }
  }, [user, navigate]);
  return <>{children}</>;
};

export default StudentRoute;
