import React, { useState } from "react";
import "./collectorlogin.css"; 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Collectorlogin() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const inputData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    
    // NOTE: Check your Backend URL. Is it 'collecterlogin' (with 'e') or 'collectorlogin' (with 'o')?
    axios.post("http://localhost:3888/collecterlogin", data) 
      .then((result) => {
        console.log(result.data);

        if (result.data.Message === "Your account is deactivated. Contact admin.") {
          alert("Your account is deactivated. Contact admin.");
          return;
        }
        console.log(result.Message);
        

        // NOTE: Make sure the Backend message matches this EXACTLY
        if (result.data.message === "Collector login successful") {
          alert("Login successful ✅");
          localStorage.setItem('collector', JSON.stringify(result.data.data));
          // Redirect to dashboard
          navigate(`/collecterdashboard/${result.data.data._id}`);
        } else {
          alert(result.data.Message || "Invalid Email or Password");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Network error! Please try again later.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Waste Collector Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={inputData}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={inputData}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* FIXED: Changed /Collectorforgot to /collectorforgot (lowercase 'c') to match App.jsx */}
        <Link to='/collectorforgot'>
  <p className="collecter-forgot">forgot password</p>
</Link>
       
        <p className="signup-text">
          Don’t have an account? 
          {/* FIXED: Ensures this matches the route path="/collectorregister" in App.jsx */}
         <Link to="/collectorregister">Sign up</Link>
         </p>
        
      </div>
    </div>
  );
}

export default Collectorlogin;