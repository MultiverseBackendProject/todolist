import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles.css';

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogout = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    }
  };
  

  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-4 custom-navbar">
      <Container>
        <Navbar.Brand className="mr-auto">
          <span className="brand-name font-weight-bold text-primary">To-Do List</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/callback/home" className="nav-link">
            Homepage
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
          {isAuthenticated ? (
          <Nav.Link className="nav-link">
            <button
              onClick={handleLogout}
              style={{
                color: 'black',
                border: 'none',
                background: 'none',
                fontWeight: 'bold',
                textDecoration: 'none',
                textTransform: 'capitalize',
                fontSize: '16px',
                fontWeight: '500',
                fontFamily: 'Helvetica Now Display Medium, Helvetica, Arial, sans-serif',
                margin: '0 10px',
              }}
            >
              Log Out
            </button>
          </Nav.Link>
        ) : (
          <Nav.Link className="nav-link">
            <button
              onClick={loginWithRedirect}
              style={{
                color: 'black',
                border: 'none',
                background: 'none',
                fontWeight: 'bold',
                textDecoration: 'none',
                textTransform: 'capitalize',
                fontSize: '16px',
                fontWeight: '500',
                fontFamily: 'Helvetica Now Display Medium, Helvetica, Arial, sans-serif',
                margin: '0 10px',
              }}
            >
              Log In
            </button>
          </Nav.Link>
        )}

        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
