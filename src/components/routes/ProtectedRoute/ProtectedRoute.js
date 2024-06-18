import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.access_token) {
      navigate('/login');
    }
  }, [user, navigate]);
  return <>{children}</>;
};

export default ProtectedRoute;
