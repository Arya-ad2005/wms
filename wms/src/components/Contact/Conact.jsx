import React, { useState } from 'react'
import './contact.css'
import axios from 'axios'

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    textarea: ""
  })

  // 1. Defined the input change handler
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // 2. Defined the missing handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
     axios.post("http://localhost:3888/createenquiry", data) // Prevents the page from reloading
    console.log("Form Submitted:", data);
    alert("Thank you! Your message has been sent.");
    
    // Optional: Clear the form after submission
    setData({
        name: "",
        email: "",
        phone: "",
        textarea: ""
    });
  }

  return (
    <div>
      <div className="contact">
        <h1 className="cnt">Contact Us</h1>

        <div className="address">
          <p className="we">We'd love to hear from you.</p>
        </div>

        <div className="loginpage">
          <form onSubmit={handleSubmit}>
            {/* 3. Changed 'for' to 'htmlFor' (React standard) */}
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              value={data.name} 
              id="name" 
              placeholder="Your name.." 
              onChange={inputHandler} 
            /><br />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              value={data.email} 
              id="email" 
              placeholder="Email.." 
              onChange={inputHandler} 
            /><br />

            <label htmlFor="phone">Phone number</label>
            <input 
              type="number" 
              id="phone" 
              name="phone" 
              value={data.phone} 
              placeholder="Phone.." 
              onChange={inputHandler} 
            /><br />

            <label htmlFor="textarea">Message</label>
            <textarea 
              name="textarea" 
              rows="7" 
              value={data.textarea} 
              id="textarea" 
              placeholder="Type here.." 
              onChange={inputHandler} 
            /><br />

            <input type="submit" value="Submit" /><br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;