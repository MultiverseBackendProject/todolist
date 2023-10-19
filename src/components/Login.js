import React from 'react';
import { Auth0Provider, useAuth0 } from 'react-auth0-spa';


const Login = () => {
    const { loginWithAuth0 } = useAuth0();

    const handleLogin = () => {
        loginWithAuth0();
    };

    return (
        <>
            <h1>Login Page</h1>
            <button>onClick={handleLogin}Login With Auth0</button>
        </>
    );
};

export default Login;
