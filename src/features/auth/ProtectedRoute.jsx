// src/components/ProtectedRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuthenticated } from '../user/userSlice';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;