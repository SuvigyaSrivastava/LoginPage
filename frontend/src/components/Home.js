import React from 'react';
import { useNavigate } from 'react-router-dom';
import userprofile from '../Assets/userprofile.png';
import './styles.css';

const Home = () => {
  const navigate = useNavigate();
  const userDetail = JSON.parse(localStorage.getItem('userdetails'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
    navigate('/auth/login');
    alert('You Logged Out');
  };

  return (
    <div className="home-container">
      <div className="card">
        <h1 className="welcome-text">
          Welcome to <span className="brand-name">Unstop</span>
        </h1>
        <div className="user-card">
          <img src={userprofile} alt="User" className="user-avatar" />
          <h2 className="user-name">{userDetail?.firstName} {userDetail?.lastName}</h2>
          <p className="user-email">{userDetail?.email}</p>
          <p className="user-designation">{userDetail?.gender}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
