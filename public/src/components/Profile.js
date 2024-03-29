import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Import the Button component

const Profile = () => {
  return (
    <div>
      <Container className="mobile">
        <Row>
          <Col md={6} className="mx-auto">
            <h1>Profile</h1>
            <Form>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label><br />
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>

              <br />
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label><br />
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
              <br />
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label><br />
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <br />
              <Form.Group controlId="dob">
                <Form.Label>Date of Birth</Form.Label><br />
                <Form.Control type="date" placeholder="Select your date of birth" />
              </Form.Group>
              <br />
              <Form.Group controlId="goals">
                <Form.Label>Goals</Form.Label><br />
                <Form.Control as="textarea" rows={5} placeholder="Enter your goals" />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">Save</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;