import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles.css';

const Navigation = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
      logout({ returnTo: window.location.origin });
  };

  return (
    <div className="justify-content-center">
      <Navbar sticky="top" bg="dark" variant="dark" className="mb-4 custom-navbar">
        <Container>
        <Navbar.Brand className="mr-auto">
          <span className="brand-name font-weight-bold text-primary" style={{ fontSize: '28px', color: '#007bff' }}>
            To-Do List
          </span>
        </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/callback/home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/callback/profile" className="nav-link">
              Profile
            </Nav.Link>
            <Nav.Link as={NavLink} to="/callback/todo" className="nav-link">
              To-Do List
            </Nav.Link>
            <Nav.Link as={NavLink} to="/callback/aboutus" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Button className="nav-button" onClick={handleLogout}>Log Out</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;