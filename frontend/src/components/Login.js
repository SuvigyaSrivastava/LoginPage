import {React ,useState} from "react";
import "./styles.css"; // Style this component
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import illustration from '../Assets/Illustration.png'
import google from '../Assets/google.png'
import facebook from '../Assets/facebook.png'
import account from '../Assets/account_circle.png'
import mail from '../Assets/mail.png'
import visibility from '../Assets/visibility.png'
import hidden from '../Assets/hidden.png'
import key from '../Assets//key.png'

const Login = () => {

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validation
      if (formData.username !== 'emilys'){
        alert('Invalid username');
        return;
      }  
      if (formData.password.length < 8){
        alert('Password must be at least 8 characters');
        return;
      }
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
         alert('Invalid email format');
         return;
      }
         

      try {
        const response = await axios.post('https://dummyjson.com/auth/login', formData);
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('userdetails',JSON.stringify(response.data));
        console.log(response)
        navigate('/home');
        alert("Login Successfully")
      } catch (err) {
        alert(err.response?.data?.error || 'Login failed');
        console.log(err)
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
          <img
          src={google}
          alt="assets" />

          Login with Google
        </button>
        <button className="social-login facebook">
          <img
          src={facebook}
          alt="assets" />
          Login with Facebook
        </button>

        <div className="separator"><hr></hr> OR <hr></hr></div>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
          <img
          src={account}
          alt="assets" />
          <div className="place_input">
            <label className="place_span">User name</label>
            <input type="text" name="username" value={formData.username} placeholder="Username" onChange={handleChange} />
            </div>
          </div>
          <div className="input-field">
          <img
          src={mail}
          alt="assets" />
          <div className="place_input">
          <label className="place_span">Email</label>
            <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
            </div>
          </div>
          <div className="input-field">
          <img
          src={key}
          alt="assets" />
          <div className="place_input">
          <label className="place_span">Password</label>
            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
            </div>
            <img
            onClick={togglePasswordVisibility}
          src={showPassword ? visibility : hidden}
          alt="assets" />
          </div>
          <div className="extras">
            <div className="check_box">
              <input type="checkbox" id="remember" className="check_inputs" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span className="forgot-password">Forgot Password?</span>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="register-link">
          Don’t have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
