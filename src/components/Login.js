import React from 'react';
import authController from '../../server/controllers/authController'

const Login = () => {
    const { login } = authController();

    const handleLogin = () => {
        login();
    };

    return (
        <>
            <h1>Login Page</h1>
            <button>onClick={handleLogin}Login With Auth0</button>
        </>
    );
};

export default Login;