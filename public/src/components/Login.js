import React from 'react';
import { login } from '../../../server/controllers/authController';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>
                Login With Auth0
            </button>
        </>
    );
};

export default Login;