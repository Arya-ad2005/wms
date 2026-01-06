import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
// Import Dropdown component
import { Navbar, Nav as NavBoot, Container, Dropdown } from 'react-bootstrap'; 

function Nav() {
    return (
        // The outer div with 'flex' is likely responsible for aligning the Navbar and the Dropdown horizontally
        <div className='flex-container-wrapper'> {/* Renamed for clarity, assuming 'flex' is in Nav.css */}
            <Navbar expand="lg" className="shadow w-100"> {/* Added w-100 to make Navbar take full width */}
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold text-success">
                        RECYCLY
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        {/* ms-auto pushes the links to the right */}
                        <NavBoot className="ms-auto"> 
                            
                            <NavBoot.Link href="/home">Home</NavBoot.Link>
                            <NavBoot.Link href="/about">About Us</NavBoot.Link>
                            <NavBoot.Link href="/contacts">Contacts</NavBoot.Link>
                        </NavBoot>
                    </Navbar.Collapse>
                </Container>
                 <div className="login-dropdown-wrapper">
                <Dropdown>
                    {/* The button part of the dropdown */}
                    <Dropdown.Toggle 
                        variant="success" 
                        id="dropdown-login"
                        className="fw-bold" // Optional: makes text bold
                    >
                        Login
                    </Dropdown.Toggle>

                    {/* The menu that opens on click */}
                    <Dropdown.Menu>
                        <Dropdown.Item href="#login/admin">Admin</Dropdown.Item>
                        <Dropdown.Item href="#login/user">User</Dropdown.Item>
                        <Dropdown.Item href="#login/collector">Collector</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            </Navbar>

            {/* Replaced the button with a Dropdown component */}
           
        </div>
    )
}

export default Nav