import React, { useState } from 'react'
import './Useredit.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
function UserEdit() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        address: "",
        userType: ""
    })

    const inputData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const imageFile = (e) => {
        setData({ ...data, image: e.target.files[0] })
    }
        
    const fetchData= (e)=>{
      axios.get(`http://localhost:3888/userviewone/${id}`)
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
    useEffect (()=>{
        fetchData()
    },[])

    function show(e) {
        e.preventDefault();

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

    if (!data.address || data.address.length < 5) {
        alert("Address must be at least 5 characters long!");
        return;
    }

    if (!data.userType) {
        alert("Please select a user type!");
        return;
    }
        console.log(data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("image", data.image);
        formData.append("address", data.address);
        formData.append("userType", data.userType);
        axios.post(`http://localhost:3888/userupdate/${id}`, formData)
            .then((result) => {
                console.log(result.data);
                alert(result.data.message);
                if (result.data.success) {
                    navigate(`/userprofile/${id}`)
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
        <div className="form-section">
            <h2 className='form-section-h2'>Waste Management Registration</h2>
            <div className='two-blocks'>

                <div className='form-container-right'>
                    <form className='form-container' onSubmit={show}>

                        <label>Full Name:</label>
                        <input type="text" name='name' value={data.name} onChange={inputData} required /><br />

                        <label>Email:</label>
                        <input type="email" name='email' value={data.email} onChange={inputData} required /><br />

                        <label>Phone:</label>
                        <input type="tel" name='phone' value={data.phone} onChange={inputData} required /><br />

                        <label>Image:</label>
                        <input type="file" name='image' onChange={imageFile} required /><br />

                        {/* <label>Password:</label> */}
                        {/* <input type="password" name='password' value={data.password} onChange={inputData} required /><br /> */}

                        <label>Address:</label>
                        <textarea rows="3" name="address" value={data.address} onChange={inputData} required></textarea><br />

                        <label>User Type:</label>
                        <select name="userType" value={data.userType} onChange={inputData} required>
                            <option value="">-- Select User Type --</option>
                            <option value="household">Household</option>
                            <option value="business">Business</option>
                            <option value="community">Community</option>
                            <option value="municipality">Municipality</option>
                        </select>


                        <button type="submit" className="submit-btn">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UserEdit
