import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import ToDoList from './components/ToDoList';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/profile" component={Profile} />
        <Route path="/todo" component={ToDoList} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;