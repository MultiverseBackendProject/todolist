import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles.css';

const Navigation = () => {
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
            Profile Page
          </Nav.Link>
          <Nav.Link as={NavLink} to="/callback/todo" className="nav-link">
            To-Do List
          </Nav.Link>
          <Nav.Link as={NavLink} to="/callback/logout" className="nav-link">
            Log Out
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
