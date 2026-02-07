import React, { useState } from 'react';
import './Adminlogin.css';
import { useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../../api/client';

function AdminLogin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const inputData = (e) => setAdmin({ ...admin, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!admin.email) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(admin.email)) errs.email = 'Enter a valid email';
    if (!admin.password) errs.password = 'Password is required';
    else if (admin.password.length < 6) errs.password = 'Password must be at least 6 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Local-only admin credentials (no backend)
    const LOCAL_ADMIN_EMAIL = 'aryaad2005@gmail.com';
    const LOCAL_ADMIN_PASSWORD = '123456789';

    try {
      if (admin.email === LOCAL_ADMIN_EMAIL && admin.password === LOCAL_ADMIN_PASSWORD) {
        // Simulate successful login without calling backend
        const fakeToken = 'local-admin-token';
        localStorage.setItem('token', fakeToken);
        localStorage.setItem('admin', JSON.stringify({ email: admin.email }));
        setAuthToken(fakeToken);
        alert('Local admin login successful ✅');
        navigate('/admindashboard');
        return;
      }

      // Fallback to backend for other credentials
      const response = await api.post('/adminlogin', admin);
      const data = response.data;
      if (data?.Message === 'Admin Login Successfully' || (data?.message && data.message.toLowerCase().includes('success'))) {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setAuthToken(data.token);
        }
        alert('Login successful ✅');
        navigate('/admindashboard');
      } else {
        alert(data.Message || data.message || 'Invalid Email or Password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error! Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box card">
        <h2>Waste Management — Admin Login</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={admin.email}
              onChange={inputData}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && <div id="email-error" className="form-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={admin.password}
              onChange={inputData}
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
            />
            {errors.password && <div id="password-error" className="form-error">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
            {loading ? 'Signing in…' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

