import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import Container from 'react-bootstrap/Container';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Container style={{ paddingTop: '2%' }}>
            <button className="btn btn-danger btn-block" onClick={loginWithRedirect}>Log in Here</button>
        </Container>
    );
};

export default Login;