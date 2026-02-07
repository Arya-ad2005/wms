import React from 'react';
import './Recidential.css';
import img1 from '../images/image7.webp';
import { Link } from 'react-router-dom';

function Recidential() {
  
  // Data for the Service Cards
  const services = [
    {
      icon: "🚛", 
      title: "Curbside Pickup",
      desc: "Dependable weekly trash collection for single-family homes and multi-unit complexes. We ensure your neighborhood stays clean."
    },
    {
      icon: "♻️", 
      title: "Single-Stream Recycling",
      desc: "No sorting required. Toss all paper, plastics, and metals into one bin. We handle the sorting to maximize resource recovery."
    },
    {
      icon: "🍂", 
      title: "Yard Waste & Composting",
      desc: "Sustainable disposal of grass clippings, branches, and organic waste, turning your garden debris into nutrient-rich compost."
    },
    {
      icon: "🛋️", 
      title: "Bulk Item Removal",
      desc: "Need to get rid of furniture or appliances? Schedule a special pickup for large items that don't fit in your standard bin."
    }
  ];

  return (
    <div className="res-container">
      
      {/* Hero Section */}
      <div className="res-hero">
        <img className="res-hero-bg" src={img1} alt="Residential Neighborhood" />
        <div className="res-hero-overlay"></div>
        <div className="res-hero-content">
          <h1>Home Waste Solutions</h1>
          <p>Keep your home and community pristine with our reliable, eco-conscious residential waste services.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Check Availability</Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="res-intro">
        <h2>Why Choose Our Residential Service?</h2>
        <p>We combine technology with sustainability to provide a hassle-free experience for homeowners.</p>
      </div>

      {/* Services Grid (Replaces the old form/card section) */}
      <div className="res-services-section">
        <div className="res-grid">
          {services.map((service, index) => (
            <div className="res-card" key={index}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="res-cta-section">
        <div className="res-cta-card">
          <h2>Ready to get started?</h2>
          <p>
            Join thousands of households contributing to a cleaner planet. 
            Sign up today to receive service updates and managing your pickup schedule.
          </p>
          
          <div className="cta-action">
            <Link to={'/contact'} className="btn-secondary">Get In Touch</Link>
          </div>

          <p className="legal-text">
            By clicking above, you agree to our <a href="/privacy">Privacy Policy</a>. 
            We respect your inbox and you can unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Bottom Contact Strip */}
      <div className="res-contact-strip">
        <p>Have questions about missed pickups or holiday schedules?</p>
        <Link to={'/contact'} className="link-highlight">Contact Support &rarr;</Link>
      </div>
      

    </div>
  );
}

export default Recidential;