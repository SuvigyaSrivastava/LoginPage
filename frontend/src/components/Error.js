import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1>404 Error</h1>
      <p>Oops! The URL you entered is not correct.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Error;
