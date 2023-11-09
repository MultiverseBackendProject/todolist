import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles.css';

const AboutUs = () => {
  return (
    <Container className="heading">
      <h1>About Us</h1>
      <Card.Text>
        Welcome to our To-Do List App! We are a passionate team of developers dedicated to helping you stay organized, boost productivity, and simplify your daily tasks.
      </Card.Text>
      <Card.Text>
        Our mission is to provide a user-friendly platform for managing your tasks while continually enhancing your experience with our app.
      </Card.Text>
      <Card.Text>
        Here's what you can expect from our app:
      </Card.Text>
      <ListGroup>
        <li className="bulleted-list">Effortless Task Management</li>
        <li className="bulleted-list">Intuitive User Interface</li>
        <li className="bulleted-list">Customizable Features</li>
        <li className="bulleted-list">Collaborative Task Sharing</li>
        <li className="bulleted-list">Secure Data Protection</li>
      </ListGroup>
      <br/>
      <Card.Text>
        We are always here to assist you. If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us at <a href="mailto:info@todolist.com">info@todolistapp.com</a>.
      </Card.Text>
      <Card.Text>
        Thank you for choosing To-Do List App to streamline your tasks and make your life more organized!
      </Card.Text>
    </Container>
  );
};

export default AboutUs;
