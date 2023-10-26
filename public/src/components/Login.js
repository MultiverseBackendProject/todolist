import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import Container from 'react-bootstrap/Container';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    console.log(useAuth0());
    return (
        <Container>
            <button onClick={() => loginWithRedirect()}>Log in</button>
        </Container>
    );
};

export default Login;