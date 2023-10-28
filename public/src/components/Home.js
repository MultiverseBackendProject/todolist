import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  return (
    <>
      <Navigation />
      <h1>Welcome to your To-Do List!</h1>
      <p>You are now logged in! Create a task and try out the app for yourself!</p>
      <Outlet />
    </>
  )
};

export default Home;