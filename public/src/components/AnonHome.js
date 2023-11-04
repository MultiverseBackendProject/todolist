import React from 'react';
import Login from './Login';

const AnonHome = () => {
  return <>
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <h1 className="mb-3">Welcome to our To-Do List App! Please log in to continue...</h1>
          <Login />
        </div>
    </div>
  </>
};

export default AnonHome;