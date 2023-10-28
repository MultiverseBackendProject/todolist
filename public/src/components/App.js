import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Profile from './Profile';
import ToDoList from './ToDoList';
import Login from './Login';
import Home from './Home';
import Logout from './Logout';

function App() {
  return (
     // routes is how react-router renders the element and changes the url without reloading the page
  <div>
    <Navigation /> make home component for first launched users \
    <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/" element={<Login />} />
        <Route exact path="/callback" element={<Home />} /> 
        {/* would need parent route to login button maybe} */}
        <Route path="/logout" element={<Logout />} />
    </Routes>
  </div>
  );
}

export default App;