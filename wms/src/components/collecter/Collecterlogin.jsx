import React, { useState } from 'react'; // Import useState
import './Collecterlogin.css';

function Collecterlogin() { // Function declaration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real auth
    console.log('login', { email, password });
    alert('Logged in (demo)');
    // In a real application, you'd send this data to your backend
  };

  return (
    <div className="collecter-login-wrapper">
      <div className="collecter-login-card">
        <h2>Collector Login</h2>
        <form onSubmit={handleSubmit} className="collecter-login-form">
          <label className="form-label">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </label>

          <label className="form-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn-login">Sign in</button>
          </div>
        </form>
        {/* Optional: Add links for forgot password or sign up */}
        <p className="login-footer-link">
          <a href="#">Forgot Password?</a>
        </p>
        <p className="login-footer-link">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Collecterlogin;