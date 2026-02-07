import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './landingPage.css';

// Importing Images
import image1 from '../../components/images/image7.webp';
import waste from '../../components/images/image1.jpg';
import waste1 from '../../components/images/image2.jpg';
import waste2 from '../../components/images/image3.jpg';
import waste3 from '../../components/images/image4.jpg';
import waste4 from '../../components/images/image5.jpg';
// Note: waste5 was duplicate in your code, using waste2 again for demo or unique image
import waste5 from '../../components/images/image3.jpg'; 

function LandingPage() {
    // Data array for cards to make the code cleaner
    const cards = [
        { img: waste, title: "Smart Waste Sorting", desc: "Efficient segregation to enhance recycling efficiency." },
        { img: waste1, title: "Recycling Innovation", desc: "Transforming waste into valuable resources." },
        { img: waste2, title: "Sustainable Future", desc: "Empowering communities to build a greener planet." },
        { img: waste3, title: "Clean Energy", desc: "Converting waste into renewable energy sources." },
        { img: waste4, title: "Community Impact", desc: "Building eco-awareness programs for everyone." },
        { img: waste5, title: "Environment First", desc: "Committed to protecting our environment." },
        // Duplicating for the infinite loop effect
        { img: waste, title: "Smart Waste Sorting", desc: "Efficient segregation to enhance recycling efficiency." },
        { img: waste1, title: "Recycling Innovation", desc: "Transforming waste into valuable resources." },
    ];

    return (
        <div className="landing-container">
            {/* Background Image */}
            <div className='background-image-landingpage'>
                <img className="landing-page-image" src={image1} alt="Background" />
                <div className="overlay"></div> {/* Dark overlay for readability */}
            </div>

            {/* Hero Section */}
            <div className='hero-section'>
                <div className='hero-content'>
                    <p className='report-year'>2026 Sustainability Report</p>
                    <h1 className='main-heading'>Empowering a Greener Future</h1>
                    <div className='description-box'>
                        <p>We are dedicated to a circular economy where resources are renewed, energy is clean, and our global impact is net-positive.</p>
                    </div>
                </div>
            </div>

            {/* Infinite Scrolling Cards Section */}
            <div className="slider-area">
                <h2 className="slider-heading">Our Initiatives</h2>
                <div className="slider-track">
                    {cards.map((card, index) => (
                        <div className="slide-card" key={index}>
                            <div className="card-image-wrapper">
                                <img src={card.img} alt={card.title} />
                            </div>
                            <div className="card-content">
                                <h5>{card.title}</h5>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className='horizontal-line'>
                <hr />
            </div>

            {/* Footer */}
            <div className="footer-container">
                <div className="footer-header">
                    <h1 className="footer-logo">WMs</h1>
                    <hr className="footer-line" />
                </div>

                <div className="footer-grid">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Investor Relations</p>
                        <p>Careers</p>
                    </div>
                    <div className="footer-column">
                        <h4>Support</h4>
                        <p>Help Centre</p>
                        <p>Safety Information</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <p>Privacy Policy</p>
                        <p>Cookie Preferences</p>
                        <p>Terms of Use</p>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;