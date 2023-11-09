import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Profile from './Profile';
import ToDoList from './ToDoList';
import Home from './Home';
import Logout from './Logout';
import AnonHome from './AnonHome';
import Callback from './Callback';
import AboutUs from './AboutUs';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // check if the current route is "/callback".
    if (location.pathname === '/callback') {
      // redirect to "/callback/home".
      navigate('/callback/home');
    }
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AnonHome />} />
        <Route path="/callback" element={<Callback />}>
          <Route path="profile" element={<Profile />} />
          <Route path="aboutus" element={<AboutUs />} /> 
          <Route path="logout" element={<Logout />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
