import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Profile from './Profile';
import ToDoList from './ToDoList';
import Login from './Login'

function App() {
  return (
     // routes is how react-router renders the element and changes the url without reloading the page
  <div>
    <Navigation />
    <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route exact path="/" element={<Login />} />
    </Routes>
  </div>
  );
}

function FirstPage() {
  return;
}

export default App;