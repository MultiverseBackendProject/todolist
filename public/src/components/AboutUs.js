import React from 'react';
import Container from 'react-bootstrap/Container';

const AboutUs = () => {
  return (
    <Container style={{ paddingTop: '10%' }}>
      <h1>About Us</h1>
      <p>
        Welcome to our To-Do List App! We are a team of passionate developers who are dedicated to helping you stay organized and productive.
      </p>
      <p>
        Our mission is to provide a user-friendly platform for managing your tasks and to continually improve your experience with our app.
      </p>
      <p>
        We are always here to assist you. If you have any questions or suggestions, please don't hesitate to reach out to us at info@todolistapp.com.
      </p>
    </Container>
  );
};

export default AboutUs;
