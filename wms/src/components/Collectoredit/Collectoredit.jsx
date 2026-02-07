import React, { useEffect, useState } from 'react'
import './Collectoredit.css'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Collectoredit() {

     const validate = () => {
    if (data.name.trim().length < 3) {
        alert("Name must be at least 3 characters.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert("Enter a valid email address.");
        return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    if (!data.image) {
        alert("Please upload an image.");
        return false;
    }

  const licenceRegex = /^[A-Za-z0-9\-]{5,}$/;

if (!licenceRegex.test(data.licenceno)) {
    alert("Licence number must be at least 5 characters.");
    return false;
}

    if (data.location.trim() === "") {
        alert("Location cannot be empty.");
        return false;
    }

    if (data.password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    return true;
};

    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        licenceno: "",
        location: "",
        password: "",
        confirmpassword: ""
    })

    const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const imageData = (e) => {
        setData({ ...data, image: e.target.files[0] })
    }

    const fetchData = (e) => {
        axios.get(`http://localhost:3888/collecterviewone/${id}`)
            .then((result) => {
                console.log(result.data);
                if (result.data && result.data.data) {
                    setData(result.data.data);
                } else {
                    console.error("Invalid response format:", result.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
            
    }
    useEffect(() => {
        fetchData()
    }, [])

    function show(e) {
        e.preventDefault();

         if (!validate()) {
        return;
    }
        if (data.password !== data.confirmpassword) {
            alert("Passwords do not match. Please re-enter correctly.");
            return;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("image", data.image);
        formData.append("licenceno", data.licenceno);
        formData.append("location", data.location);
        formData.append("password", data.password);
        formData.append("confirmpassword", data.confirmpassword);
        axios.post(`http://localhost:3888/collecterupdate/${id}`, formData)
            .then((response) => {
                console.log("updated",response.data);
                alert(response.data.message);
                if (response.data.message === "Collector details updated successfully") {
                    navigate(`/collecterprofile/${id}`);
                }
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Network error! Please try again later.");
                }
            });
    }
    return (
        <div className="form-section-coll">
            <h1>Waste Management Registration</h1>
            <div className='two-blocks-coll'>
              

                <div className='form-container-right-coll'>
                    <form className='form-container-coll' onSubmit={show}>
                        <div className='form-group-in-coll'>
                            <label>Full Name:</label>
                            <input type="text" name='name' value={data.name} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Email:</label>
                            <input type="email" name='email' value={data.email} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Phone:</label>
                            <input type="tel" name='phone' value={data.phone} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Image:</label>
                            <input type="file" name='image' onChange={imageData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Licence Number:</label>
                            <input type="text" name='licenceno' value={data.licenceno} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Location:</label>
                            <input name="location" value={data.location} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Password:</label>
                            <input type="password" name='password' value={data.password} onChange={inputData} required /><br />
                        </div>
                        <div className='form-group-in-coll'>
                            <label>Confirm Password:</label>
                            <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={inputData} required /><br />

                        </div>
                         <button type="submit" className="submit-btn-coll">Update</button>
                       
                    </form>


                </div>

            </div>
        </div>
    )
}
export default Collectoredit;
