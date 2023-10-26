import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import Container from 'react-bootstrap/Container';

const AuthLogin = () => {
    const { loginWithRedirect } = useAuth0();
    console.log(useAuth0());
    return (
        <Container>
            <h1>Login Page</h1>
            <button onClick={() => loginWithRedirect()}>Log in</button>
        </Container>
    );
};

export default AuthLogin;