import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Home from './Home';

const Callback = () => {

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Callback;