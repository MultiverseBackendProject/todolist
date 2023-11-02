import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles.css';

function Navigation() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand className="mr-0">
            <span>To-Do List</span>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/callback/home" className="me-3">
              Homepage
            </Nav.Link>
            <Nav.Link as={NavLink} to="/callback/profile" className="me-3">
              Profile Page
            </Nav.Link>
            <Nav.Link as={NavLink} to="/callback/todo" className="me-3">
              To-Do List
            </Nav.Link>
            <Nav.Link as={NavLink} to="/callback/logout">
              Log Out
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
