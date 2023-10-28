import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  return (
    <>
      <h1>Welcome to your To-Do List!</h1>
      <p>You are now logged in! Create a task and try out the app for yourself!</p>
    </>
  )
};

export default Home;