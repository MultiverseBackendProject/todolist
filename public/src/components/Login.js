import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return <>
        <div align="center">
            <Button as="a" size="lg" variant="success" onClick={loginWithRedirect}>
                Log in Here
            </Button>
        </div>
    </>
};

export default Login;