import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './Landing.css';                  
import Nav from './Nav';
import waste1 from '../../images/waste1.jpg'; // We will use this image

function Landing() {
  return (
    <div className="landing-page-wrapper">
      <Nav/>
      
      {/* The main landing content - The Hero Section */}
      <header className="landing-container">
        {/* The image is now a visually treated background, positioned absolutely */}
        <img 
          src={waste1} 
          alt="A pile of waste ready for recycling" 
          className="waste-image" 
        />
        
        <div className="text-content">
          <h1 className="landing-title">Welcome to RECYCLY</h1>
          <p className="landing-description">
            Your platform for a cleaner planet. Join us in our mission to recycle and reduce waste, one step at a time.
          </p>
          <button className="cta-button">
              Start Recycling Today
          </button>
        </div>
      </header>
      
    </div>
  );
}

export default Landing;