import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { vendor } = useAuth();
  return vendor ? children : <Navigate to="/vendor-login" />;
};

export default ProtectedRoute;
