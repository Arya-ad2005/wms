import React, { useState } from "react";
import "./Userlogin.css"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Userlogin() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const inputData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3888/userlogin", user)
      .then((result) => {
        console.log(result);
        
        if (result.data.message === "User Login Successfully") {
          alert("Login successful");
          localStorage.setItem("user", JSON.stringify(result.data.data));
          navigate(`/userdashboard/${result.data.data._id}`);
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
        <h2>Waste Management User Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={inputData}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={inputData}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="forgot-text">
          <Link to="/userforgot">Forgot password?</Link>
        </p>

<p className="user-sign-up">
  Don’t have an account? <Link to="/userregister">Sign up</Link>
</p>
      </div>
    </div>
  );
}

export default Userlogin;
