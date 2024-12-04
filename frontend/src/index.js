import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dasboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import UnprotectedRoute from './Midleware/UnprotectedRoute';
import ProtectedRoute from './Midleware/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<UnprotectedRoute> <Login /> </UnprotectedRoute>} />
        <Route path="/register" element={<UnprotectedRoute> <Register /> </UnprotectedRoute>} />

        <Route path="/" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
