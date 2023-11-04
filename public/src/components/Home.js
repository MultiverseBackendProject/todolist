import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <Container align="center">
      <h1>Welcome to your To-Do List!</h1>
      <Card>
        <Card.Body>
          <Card.Text>
            You are now logged in! Create a task and try out the app for yourself!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;