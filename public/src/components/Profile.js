import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <div>
            <h1>Profile</h1></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;