import React, { useState } from "react";
import "./Collectorforgot.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Collectorforgot() {

const validatePassword = () => {
  const password = collecter.password;

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  return true;
};
  
  const navigate = useNavigate()
  const [collecter, setCollecter] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCollecter({ ...collecter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (!validatePassword()) {
    return;
  }

    axios.post("http://localhost:3888/forgotcollecterpass", {
        email: collecter.email,
        password: collecter.password, 
      })
      .then((result) => {
        if (result.data.message === "Spotted Wastecollecter") {
          alert(" Password updated successfully!");
          navigate('/collecterlogin')
        } else {
          alert(result.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error resetting password. Please try again.");
      });
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={collecter.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              name="password"
              value={collecter.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="reset-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Collectorforgot;
