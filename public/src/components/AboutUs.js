import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const AboutUs = () => {
  return (
    <Container style={{ paddingTop: '3%', paddingLeft: '20%', paddingRight: '20%' }}>
      <h1 style={{ fontSize: '28px'}}>About Us</h1>
      <Card>
        <Card.Body>
          <Card.Text style={{ fontSize: '16px' }}>
            Welcome to our To-Do List App! We are a passionate team of developers dedicated to helping you stay organized, boost productivity, and simplify your daily tasks.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text style={{ fontSize: '16px' }}>
            Our mission is to provide a user-friendly platform for managing your tasks while continually enhancing your experience with our app.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text style={{ fontSize: '16px' }}>
            Here's what you can expect from our app:
          </Card.Text>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item style={{ fontSize: '16px' }}>Effortless Task Management</ListGroup.Item>
          <ListGroup.Item style={{ fontSize: '16px' }}>Intuitive User Interface</ListGroup.Item>
          <ListGroup.Item style={{ fontSize: '16px' }}>Customizable Features</ListGroup.Item>
          <ListGroup.Item style={{ fontSize: '16px' }}>Collaborative Task Sharing</ListGroup.Item>
          <ListGroup.Item style={{ fontSize: '16px' }}>Secure Data Protection</ListGroup.Item>
        </ListGroup>
      </Card>
      <br />
      <br />
      <Card>
        <Card.Body>
          <Card.Text style={{ fontSize: '16px' }}>
            We are always here to assist you. If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us at <a href="mailto:info@todolist.com">info@todolistapp.com</a>.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text style={{ fontSize: '16px' }}>
            Thank you for choosing To-Do List App to streamline your tasks and make your life more organized!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutUs;