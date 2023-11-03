import React from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login';

const AnonHome = () => {
  return (
    <Container style={{ paddingTop: '2%', paddingLeft: '20%' }}>
      <h1>Welcome to our To-Do List App! Please log in to continue...</h1>
      <Login />
    </Container>
  )
};

export default AnonHome;