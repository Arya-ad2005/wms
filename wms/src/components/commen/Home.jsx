import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Nav from './Nav';
import waste2 from '../../images/waste2.jpg'; 
function Home() {
  return (
    <div>
      <Nav/>
      <header className="home-container">
        <img 
          src={waste2} 
          alt="A pile of waste ready for recycling" 
          className="waste-image" 
        />
        <div className="text-content">
          <h1 className="home-title">Welcome to RECYCLY</h1>
          <p className="home-description">
            Your platform for a cleaner planet. Join us in our mission to recycle and reduce waste, one step at a time.
          </p>
          <button className="cta-button">
              Start Recycling Today
          </button>
        </div>
      </header>
    </div>
  )
}

export default Home
