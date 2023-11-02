import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import Container from 'react-bootstrap/Container';

const Logout = () => {
    const { logout } = useAuth0();

    return ( 
        <Container>
            <button className="btn btn-danger btn-block" onClick={logout}>Log Out Here</button>
        </Container>
    )
};

export default Logout;