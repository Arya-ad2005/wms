import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Userlogin.css';

// Import necessary React-Bootstrap components
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Userlogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null); // 'success' or 'error'

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

    if (formData.username.trim() === '') {
      newErrors.username = 'Username cannot be empty.';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginStatus(null);
    
    if (!validate()) {
      return; // Stop submission if validation fails
    }

    setLoading(true);
    
    // --- SIMULATE API CALL (Replace with your actual backend logic) ---
    console.log('Attempting login with:', formData);
    
    setTimeout(() => {
      setLoading(false);
      
      // Successful login simulation (e.g., if username is 'demo')
      if (formData.username.toLowerCase() === 'demo' && formData.password === 'password') {
         setLoginStatus('success');
         // In a real app, you would redirect the user here.
      } else {
         setLoginStatus('error');
         // Show specific backend error message
      }

    }, 1500);
  };

  return (
    <div className="login-page-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={7} lg={5} xl={4}> {/* Tighter column for a typical login form */}
            <Card className="shadow-lg login-card border-0">
              <Card.Body className="p-4 p-md-5">
                <h2 className="text-center mb-4 login-heading text-primary fw-bold">
                  User Login
                </h2>
                <p className="text-center text-muted mb-4">
                    Enter your credentials to access the system.
                </p>
                
                {/* Login Status Feedback */}
                {loginStatus === 'success' && (
                    <Alert variant="success" className="text-center">
                        Login successful! Redirecting...
                    </Alert>
                )}
                {loginStatus === 'error' && (
                    <Alert variant="danger" className="text-center">
                        Invalid username or password. Please try again.
                    </Alert>
                )}
                
                <Form onSubmit={handleSubmit} noValidate>
                 
                  {/* 1. Username/Email Field */}
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter your username or email" 
                      required 
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* 2. Password Field */}
                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Enter your password" 
                      required 
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                     <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                    <div className="text-end pt-1">
                        <a href="/forgot-password" className="text-muted small">Forgot Password?</a>
                    </div>
                  </Form.Group>
                  
                  {/* 3. Login Button */}
                  <div className="d-grid">
                    <Button 
                      variant="success" 
                      type="submit" 
                      className="login-submit-button py-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Logging in...
                        </>
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-center mt-4">
                    Don't have an account? <a href="/register" className="text-primary fw-bold">Register here</a>
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

export default Userlogin;