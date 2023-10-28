import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Callback = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Navigation />
            <Outlet />
            {console.log(isAuthenticated)}
            {console.log(user)}
        </>
    )
}

export default Callback;