import React from 'react';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container style={{ paddingTop: '2%' }}>
      <h1>Welcome to your To-Do List!</h1>
      <p>You are now logged in! Create a task and try out the app for yourself!</p>
    </Container>
  );
};

export default Home;
