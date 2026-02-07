import React from 'react'
import { useNavigate } from 'react-router-dom'

// ✅ IMAGE IMPORT (make sure this file exists)
import commercial from '../images/image2.jpg'

// ✅ CSS
import './Commertial.css'

function Commertial() {
  const navigate = useNavigate()

  return (
    <div className="comm-container">

      {/* HERO SECTION */}
      <div className="comm-hero">
        <img
          className="comm-hero-img"
          src={commercial}
          alt="Commercial Waste Management"
        />
        <div className="comm-overlay"></div>
        <div className="comm-hero-text">
          <h1>Commercial Trash & Recycling</h1>
          <p>
            Reliable, sustainable waste pickup service for small and medium
            businesses.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="comm-content-wrapper">
        <div className="comm-card-container">
          <h1>Business Waste Solutions</h1>
          <p className="comm-subtitle">
            Empowering businesses with reliable, sustainable, and cost-effective
            waste solutions.
          </p>

          <div className="comm-grid">
            <div className="comm-card">
              <h3>🏢 Customized Plans</h3>
              <p>
                Tailored waste pickup schedules aligned with your business
                operations.
              </p>
            </div>

            <div className="comm-card">
              <h3>♻️ Sustainable Recycling</h3>
              <p>
                Responsible recycling processes that reduce environmental
                impact.
              </p>
            </div>

            <div className="comm-card">
              <h3>🚛 Bulk Handling</h3>
              <p>
                Efficient handling of construction debris and industrial waste.
              </p>
            </div>

            <div className="comm-card">
              <h3>💼 Business Support</h3>
              <p>
                Dedicated customer service for smooth and reliable operations.
              </p>
            </div>
          </div>

          <div className="comm-cta-box">
            <p>
              Join thousands of businesses choosing eco-friendly waste
              management.
            </p>
            <button
              className="comm-btn"
              onClick={() => navigate('/contact')}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="footerarrangement">
        <div className="footer-header">
          <h1 className="footer-logo">WMs</h1>
          <hr className="footer-line" />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4 className="footertext">Company</h4>
            <p className="footer-link">About Us</p>
            <p className="footer-link">Investor Relations</p>
            <p className="footer-link">Careers</p>
          </div>

          <div className="footer-column">
            <h4 className="footertext">Support</h4>
            <p className="footer-link">Help Centre</p>
            <p className="footer-link">Safety Information</p>
            <p className="footer-link">Contact Us</p>
          </div>

          <div className="footer-column">
            <h4 className="footertext">Legal</h4>
            <p className="footer-link">Privacy Policy</p>
            <p className="footer-link">Cookie Preferences</p>
            <p className="footer-link">Terms of Use</p>
          </div>

          <div className="footer-column">
            <h4 className="footertext">Connect</h4>
            <p className="footer-link">Instagram</p>
            <p className="footer-link">Twitter</p>
            <p className="footer-link">LinkedIn</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Commertial
