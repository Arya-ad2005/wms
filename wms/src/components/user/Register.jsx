import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Assuming this file exists for custom styles
import Nav from '../commen/Nav';

// Import necessary React-Bootstrap components
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Register() {
  // Initial state for all form fields, defaulting userType to 'user'
  const [formData, setFormData] = useState({
    userType: 'user', // Fixed to 'user' as there's no selector
    username: '',
    email: '',
    password: '',
    confirmPassword: '', 
    address: '',
    city: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null); // 'success' or 'error'

  // Handler for all input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Map controlId to state key (e.g., 'formUsername' -> 'username')
    const key = id.replace('form', '').toLowerCase();

    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
    
    // Clear error for the field being typed into
    if (errors[key]) {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[key];
            return newErrors;
        });
    }
  };

  // Client-Side Validation Logic
  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    
    if (formData.address.trim() === '') {
        newErrors.address = 'Address is required.';
    }
    
    if (formData.city.trim() === '') {
        newErrors.city = 'City is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrationStatus(null);
    
    if (!validate()) {
      return; // Stop submission if validation fails
    }

    setLoading(true);
    
    // --- SIMULATE API CALL (Replace with your actual backend logic) ---
    console.log('Attempting to register:', formData);
    
    setTimeout(() => {
      setLoading(false);
      
      // Successful registration simulation
      if (formData.username.toLowerCase() !== 'erroruser') { // Simple simulation logic
         setRegistrationStatus('success');
         // In a real app, you would redirect the user here.
      } else {
         setRegistrationStatus('error');
         // Show specific backend error (e.g., Username already taken)
      }

    }, 2000);
  };
  
  // Simple form reset logic
  const handleReset = () => {
      setFormData({
          userType: 'user', username: '', email: '', 
          password: '', confirmPassword: '', address: '', city: ''
      });
      setErrors({});
      setRegistrationStatus(null);
  }

  return (
    
      <div className="register-page-wrapper d-flex align-items-center justify-content-center min-vh-100">

        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={7} xl={6}>
            <Card className="shadow-lg register-card border-0">
              <Card.Body className="p-4 p-md-5">
                <h2 className="text-center mb-4 register-heading text-primary fw-bold">
                  Create Your Account
                </h2>
                <p className="text-center text-muted mb-4">User register</p>
                
                {/* Registration Status Feedback */}
                {registrationStatus === 'success' && (
                    <Alert variant="success" className="text-center">
                        Registration successful! Welcome, {formData.username}!
                    </Alert>
                )}
                {registrationStatus === 'error' && (
                    <Alert variant="danger" className="text-center">
                        Registration failed. Please try again.
                    </Alert>
                )}
                
                <Form onSubmit={handleSubmit} noValidate>
                 
                  {/* 1. Username */}
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Choose a unique username" 
                      required 
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username} // Highlight input on error
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* 2. Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                     <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* 3. Password */}
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Create a strong password" 
                      required 
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Text className="text-muted">
                        Must be at least 6 characters long.
                    </Form.Text>
                     <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  {/* 4. Confirm Password (Crucial for validation) */}
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Repeat your password" 
                      required 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                     <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  {/* 5. Address (Responsive Layout) */}
                  <Row className="mb-4">
                    <Col md={6}>
                      <Form.Group controlId="formAddress">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Street address" 
                          required 
                          value={formData.address}
                          onChange={handleChange}
                          isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.address}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mt-3 mt-md-0">
                      <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="City" 
                          required 
                          value={formData.city}
                          onChange={handleChange}
                          isInvalid={!!errors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* 6. Buttons */}
                  <div className="d-grid pt-3">
                    <Button 
                      variant="success"
                      type="submit" 
                      className="register-submit-button py-2"
                      disabled={loading} // Disable while loading
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Registering...
                        </>
                      ) : (
                        'Register Now'
                      )}
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      type="button" 
                      className="mt-3 register-cancel-button py-2"
                      onClick={handleReset}
                      disabled={loading}
                    >
                      Reset Form
                    </Button>
                  </div>
                  
                  <p className="text-center mt-4">
                    Already have an account? <a href="/login" className="text-primary fw-bold">Login here</a>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;