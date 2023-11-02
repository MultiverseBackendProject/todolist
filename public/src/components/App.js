import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import ToDoList from './ToDoList';
import Home from './Home';
import Logout from './Logout';
import AnonHome from './AnonHome';
import Callback from './Callback';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Navigation from './Navigation'; // Import the Navigation component

function App() {
  return (
    <div>
      <Navigation /> {/* Include the Navigation component outside Routes */}
      <Routes>
        <Route exact path="/" element={<AnonHome />} />
        <Route path="/callback" element={<Callback />}>
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<AboutUs />} /> 
          <Route path="logout" element={<Logout />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
