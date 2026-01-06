import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'; 
import Nav from './Nav';
import waste4 from '../../images/waste4.webp'; // Used as a background visual

// Import necessary React-Bootstrap components
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  // Simple handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // In a real application, you would send the form data to a server here.
    e.target.reset(); 
  };

  return (
    <div>
      <Nav/>
      
      <div className="contact-page-wrapper">
        <Container className="my-5">
          <Row>
            {/* Left Column: Contact Form */}
            <Col md={7} className="mb-4">
              <Card className="shadow-lg contact-form-card">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="text-center mb-4 contact-heading">Get In Touch</h2>
                  <p className="text-center mb-5 text-muted">
                    We'd love to hear from you! Send us a message and we'll respond as soon as possible.
                  </p>
                  
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" placeholder="Recycling Inquiry, Partnership, etc." />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Your message here..." required />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100 cta-send-button">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Column: Contact Info and Visual */}
            <Col md={5}>
              <div className="contact-info-block">
                <div className="info-overlay">
                    <h2 className="mb-4">Contact Information</h2>
                    
                    <div className="info-item">
                        <i className="bi bi-geo-alt-fill"></i> {/* Assuming bootstrap icons are available */}
                        <p className="fw-bold">Office Address:</p>
                        <p>123 Green Earth Road, Suite 400, Sustainable City, 10010</p>
                    </div>

                    <div className="info-item">
                        <i className="bi bi-envelope-fill"></i>
                        <p className="fw-bold">Email Us:</p>
                        <p>support@recycly.com</p>
                    </div>

                    <div className="info-item">
                        <i className="bi bi-telephone-fill"></i>
                        <p className="fw-bold">Call Us:</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
                {/* Background image for visual appeal */}
                <img src={waste4} alt="Recycling materials" className="contact-info-bg" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact