import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoute({ isSignedIn }) {
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
