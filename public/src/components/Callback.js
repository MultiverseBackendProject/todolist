import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Navigation from './Navigation';
import Footer from './Footer';

const Callback = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>  
            {/* nav bar will only show up if in the callback routes (when authenticated) */}
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Callback;