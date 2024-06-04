import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/student');
    }
  }, [user, navigate]);
  return <>{children}</>;
};

export default AdminRoute;
