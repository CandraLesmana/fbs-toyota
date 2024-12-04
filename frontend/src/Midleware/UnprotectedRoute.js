import React from 'react';
import { Navigate } from 'react-router-dom';

const UnprotectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default UnprotectedRoute;