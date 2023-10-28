import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import ToDoList from './ToDoList';
import Home from './Home';
import Logout from './Logout';
import AnonHome from './AnonHome';
import Callback from './Callback';

function App() {
  return (
     // routes is how react-router renders the element and changes the url without reloading the page
  <div>
    <Routes>
        {/* when first launching app, if the user is not logged in, they will be redirected to the AnonHome component */}
        <Route exact path="/" element={<AnonHome />} /> 

        {/* if the user is logged in, they will be redirected to the Callback component with access to these components*/}
        <Route path="/callback" element={<Callback />}>
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
          <Route path="todo" element={<ToDoList />} />
          <Route path="home" element={<Home />} />
        </Route>

    </Routes>
  </div>
  );
}

export default App;