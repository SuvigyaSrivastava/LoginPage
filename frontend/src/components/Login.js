import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import illustration from '../Assets/Illustration.png';
import google from '../Assets/google.png';
import facebook from '../Assets/facebook.png';
import account from '../Assets/account_circle.png';
import mail from '../Assets/mail.png';
import visibility from '../Assets/visibility.png';
import hidden from '../Assets/hidden.png';
import key from '../Assets/key.png';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/home');
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(''); // Clear error on input change
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.username !== 'emilys') {
      setErrorMessage('Invalid username. Use "emilys".');
      return;
    }
    if (formData.password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Invalid email format.');
      return;
    }

    const payload = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    try {
      // Using JSONPlaceholder for mock API testing
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);

      // Simulate storing a mock token and user details
      localStorage.setItem('token', 'mock_token');
      localStorage.setItem('userdetails', JSON.stringify(response.data));
      navigate('/home');
      alert('Login Successful');
    } catch (err) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-illustration">
        <img src={illustration} alt="Login Illustration" />
      </div>
      <div className="login-form">
        <h1>Welcome to <span className="brand-name">Unstop</span></h1>
        <button className="social-login google">
          <img src={google} alt="Google" /> Login with Google
        </button>
        <button className="social-login facebook">
          <img src={facebook} alt="Facebook" /> Login with Facebook
        </button>
        <div className="separator"><hr /> OR <hr /></div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <img src={account} alt="User" />
            <div className="place_input">
              <label>Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="emilys" />
            </div>
          </div>
          <div className="input-field">
            <img src={mail} alt="Email" />
            <div className="place_input">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" />
            </div>
          </div>
          <div className="input-field">
            <img src={key} alt="Password" />
            <div className="place_input">
              <label>Password</label>
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            </div>
            <img src={showPassword ? visibility : hidden} alt="Toggle Password" onClick={togglePasswordVisibility} />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="extras">
            <div className="check_box">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span className="forgot-password">Forgot Password?</span>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">Don’t have an account? <span>Register</span></p>
      </div>
    </div>
  );
};

export default Login;
