import React from 'react';
import Logout from './Logout';

const Home = () => {

  return (
    <>
      <h1>Welcome to your To-Do List!</h1>
      <Logout /> 
      {/* change Logout output url on autho - to localhost:1234/ */}
    </>
  )
};

export default Home;