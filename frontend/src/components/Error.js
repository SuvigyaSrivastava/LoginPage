import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
      color: '#6358DC',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    message: {
      fontSize: '1.5rem',
      marginBottom: '30px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.2rem',
      backgroundColor: '#6358DC',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    buttonHover: {
      backgroundColor: '#a7353f',
    },
  };

  const handleNavigate = () => {
    navigate('/'); // Navigates to the home page
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>404 Error</div>
      <p style={styles.message}>Oops! The URL you entered is not correct.</p>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={handleNavigate}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
