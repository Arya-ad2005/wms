import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';   
import Nav from './Nav';
import waste3 from '../../images/waste3.jpg'; // Assuming this image is used visually

function About() {
  return (
    <div>
        <Nav/>

        {/* Hero-like visual header for the About page */}
        <header className="about-hero">
            <img src={waste3} alt="Recycling process in action" className="about-hero-image" />
            <div className="hero-overlay">
                <h1>Our Story: Driven by a Sustainable Future</h1>
            </div>
        </header>

        {/* Main Content Section */}
        <section className="about-content-section">
            <div className="container"> 
                {/* 1. Core Mission Paragraph */}
                <p className="lead-paragraph">
                    **RECYCLY is more than just a platform; it's a movement dedicated to revolutionizing waste management and fostering a circular economy.** Founded on the principle that every piece of waste is a resource, our mission is to simplify the recycling process, making it accessible, rewarding, and integral to daily life for everyone—from urban residents to industrial manufacturers. We are the bridge connecting mindful citizens, dedicated collectors, and essential resource processors.
                </p>

                {/* 2. Problem/Solution & Vision */}
                <h2>The Vision Behind Our Platform</h2>
                <p>
                    In an age of escalating environmental challenges, we recognize that traditional linear consumption models are unsustainable. Our vision is a world where waste is virtually eliminated, replaced by a closed-loop system that minimizes ecological footprint and maximizes resource efficiency. RECYCLY achieves this by utilizing cutting-edge digital technology to intelligently match materials with collection services and processing facilities, ensuring the highest possible rate of recovery and reuse.
                </p>
                <p>
                    We believe transparency is key to building trust and driving change. Our platform provides users with real-time impact metrics, showing exactly how their recycling efforts translate into reduced carbon emissions, saved landfill space, and conserved natural resources. This immediate feedback loop is designed to inspire sustained engagement and community-wide action.
                </p>

                {/* 3. Commitment to Stakeholders */}
                <h2>Our Commitment to You</h2>
                <div className="commitments-grid">
                    <div>
                        <h3>For the Users</h3>
                        <p>We provide intuitive tools to track recycling schedules, find drop-off points, and receive rewards for their environmental stewardship. Your convenience is our priority.</p>
                    </div>
                    <div>
                        <h3>For the Collectors</h3>
                        <p>We offer optimized route planning, real-time demand insights, and a reliable network to increase efficiency, reduce costs, and improve working conditions.</p>
                    </div>
                    <div>
                        <h3>For the Planet</h3>
                        <p>Our commitment extends beyond logistics. We actively partner with environmental organizations and advocate for policies that accelerate the shift towards a truly sustainable future.</p>
                    </div>
                </div>

                {/* 4. Concluding Call to Action */}
                <p className="closing-statement">
                    Join us in writing the next chapter of environmental stewardship. By choosing RECYCLY, you are not just recycling; you are investing in a healthier, cleaner, and more sustainable planet for generations to come.
                </p>
            </div>
        </section>
    </div>
  )
}

export default About