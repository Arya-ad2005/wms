import React, { useState } from 'react';
import './userregister.css';
import axios from 'axios'; // 1. Uncommented this
import { useNavigate } from 'react-router-dom';

// 2. Added dummy image import (Replace this with your actual image path)
// import imagereg from './assets/your-image.png'; 

// 3. Changed component name to Capital Case
function Userregister() { 

    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        password: "",
        address: "",
        userType: "",
    });

    const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const imageFile = (e) => {
        setData({ ...data, image: e.target.files[0] });
    }

    function show(e) {
        e.preventDefault();

        // Validations
        if (!data.name || data.name.length < 3) {
            alert("Name must be at least 3 characters!");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            alert("Please enter a valid email!");
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(data.phone)) {
            alert("Phone number must be 10 digits!");
            return;
        }

        if (!data.image) {
            alert("Please upload an image!");
            return;
        }

        if (!data.password || data.password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        if (!data.address || data.address.length < 5) {
            alert("Address must be at least 5 characters long!");
            return;
        }

        if (!data.userType) {
            alert("Please select a user type!");
            return;
        }

        // 4. Uncommented and fixed the Axios Logic
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("image", data.image);
        formData.append("password", data.password);
        formData.append("address", data.address);
        formData.append("userType", data.userType);

        axios.post("http://localhost:3888/userregistration", formData)
            .then((result) => {
                console.log(result.data);
                alert(result.data.message || "Registration Successful");
                // Check how your backend sends success status (e.g., result.data.status === 200)
                if (result.data.success || result.data.message === "User registered successfully") {
                    navigate("/userlogin");
                }
            })
            .catch((error) => {
                console.error(error);
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Network error! Please try again later.");
                }
            });
    } // 5. Added the closing brace for the show function here

    // 6. The return statement is now correctly outside the show function
    return (
        <div className="form-section-user">
            <h2>Waste Management Registration</h2>

            <div className="registration-block-user">
                
                <div className="two-blocks-user">
                   
                    <div className="form-container-right-user">
                        <form className="form-container-user" onSubmit={show}>
                            <label>Full Name:</label>
                            <input type="text" name="name" value={data.name} onChange={inputData} required />

                            <label>Email:</label>
                            <input type="email" name="email" value={data.email} onChange={inputData} required />

                            <label>Phone:</label>
                            <input type="tel" name="phone" value={data.phone} onChange={inputData} required />

                            <label>Image:</label>
                            <input type="file" name="image" onChange={imageFile} required />

                            <label>Password:</label>
                            <input type="password" name="password" value={data.password} onChange={inputData} required />

                            <label>Address:</label>
                            <textarea rows="3" name="address" value={data.address} onChange={inputData} required></textarea>

                            <label>User Type:</label>
                            <select name="userType" value={data.userType} onChange={inputData} required>
                                <option value="">-- Select User Type --</option>
                                <option value="household">Household</option>
                                <option value="business">Business</option>
                                <option value="community">Community</option>
                                <option value="municipality">Municipality</option>
                            </select>

                            <button type="submit" className="submit-btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Userregister;