import React from 'react';
import './About.css';
import image from '../../components/images/image7.webp'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    // Data for the columns - easier to manage content here
    const recycleItems = [
        {
            title: "Paper & Cardboard",
            desc: "Flatten cardboard boxes. clean paper only. No greasy pizza boxes or coffee cups."
        },
        {
            title: "Hard Plastics #1 & #2",
            desc: "Rinse out milk jugs, detergent bottles, and water bottles. Keep caps on."
        },
        {
            title: "Aluminum & Metal Cans",
            desc: "Empty and rinse soda cans, soup tins, and foil trays. Do not crush them."
        },
        {
            title: "Glass Bottles & Jars",
            desc: "Remove lids. Clear, brown, and green glass is accepted. No broken glass."
        },
        {
            title: "Compost / Food Waste",
            desc: "Fruit scraps, vegetable peels, coffee grounds, and eggshells go in the green bin."
        },
        {
            title: "Electronic Waste",
            desc: "Batteries, phones, and old cables cannot go in standard bins. Visit a drop-off center."
        },
        {
            title: "Soft Plastics",
            desc: "Grocery bags and plastic wrap usually require a separate supermarket drop-off."
        },
        {
            title: "Hazardous Materials",
            desc: "Paint, motor oil, and chemicals must be taken to specialized disposal facilities."
        }
    ];

    return (
        <div className="sustain-page">
            {/* Header Section */}
            <div className='container sustain-head text-center'>
                <h1 className='sustain-title'>Recycling at Home</h1>
                <p className='sustain-subtitle'>
                    Lead the way to a more sustainable household by educating your family, friends, and co-workers 
                    on how to differentiate between recyclable and non-recyclable materials.
                </p>
            </div>

            {/* Overlap Section */}
            <div className='sustain-overlap-section'>
                <div className="container">
                    <div className="overlap-wrapper">
                        
                        <div className="overlap-image-box">
                            <img src={image} alt="Recycling Guide" className="overlap-img" />
                        </div>

                        <div className="overlap-text-box">
                            <h2 className='overlap-title'>How to Organize Your <br /> <span className="highlight-text">Recycling</span></h2>
                            <p className='overlap-desc'>
                                Spread the recycling love: Add two bins throughout rooms in your house
                                such as the home office, bathrooms, and garage. Watch the video for more
                                tips and guidelines on how to keep your household green.
                            </p>
                            
                        </div>

                    </div>
                </div>
            </div>

            {/* Grid Section Heading */}
            <div className='container sustain-body-header'>
                <h2 className='section-title'>Posters, Guides & Tools</h2>
            </div>

            {/* Cards Grid */}
            <div className="container mb-5">
                <div className="row g-4">
                    {recycleItems.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={index}>
                            <div className="recycle-card h-100">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;