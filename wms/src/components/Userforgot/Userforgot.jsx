import React, { useState } from "react";
import axios from "axios";
import "./Userforgot.css";
import { useNavigate } from "react-router-dom";

function Userforgot() {
  
  const validatePassword = () => {
  const password = user.password;

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }
   return true;
};
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     if (!validatePassword()) {
    return;
  }
     

    axios.post("http://localhost:3888/forgotpassword", user)
      .then((result) => {
        console.log(result);
        
        if (result.data.message === "Password updated successfully") {
          alert(" Password updated successfully!");
          navigate('/userlogin')
        } else {
          alert(res.data.message);
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
          <div className="form-group-forgot">
            <label className="forgot-label">Email</label>
            <input
              className="input-forgot"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-forgot">
            <label className="forgot-label">New Password</label>
            <input
              className="input-forgot"
              type="password"
              name="password"
              value={user.password}
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

export default Userforgot;
