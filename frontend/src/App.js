import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ErrorPage from './components/Error';

function App() {

  function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');
    const location = useLocation();
  
    if (!token) {
      
      return <Navigate to="/auth/login" state={{ from: location }} replace  />;
  
    }
    
    return children;
  }

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth/login" element={<Login />} />
     
        <Route path="/home" element={ <ProtectedRoute>  <Home /> </ProtectedRoute> } />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>

  );
};

export default App;
