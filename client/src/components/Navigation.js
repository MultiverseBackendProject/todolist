import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles.css';

function Navigation() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-4 custom-navbar">
      <Container>
        <Navbar.Brand className="mr-auto">To Do List</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" className="me-3">
            Search Lists
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profile">
            Profile
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };