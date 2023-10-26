import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../ThemeContent';

import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { dark, toggle } = useContext(ThemeContext);
  const [search, setSearch] = useState('');

  const searchLists = (title) => {
    // Implement your search logic here
  }

  const clearSearchResults = () => {
    setSearch('');
  }

  return (
    <div className={dark ? 'dark-theme home container' : 'light-theme home container'}>

      {isAuthenticated ? (
        // Render content when the user is authenticated
        <div>
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Search for To-Do List"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => searchLists(search)}
              >
                Search
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={clearSearchResults}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <label htmlFor="darkSlider" className="me-2">Toggle Dark Mode</label>
            <input
              type="range"
              className="form-range"
              id="darkSlider"
              min="0"
              max="1"
              step="1"
              onChange={toggle}
              value={dark ? "1" : "0"}
            />
          </div>
        </div>
      ) : (
        // Render a message or alternative content when the user is not authenticated
        <div>
          <p>Please log in to access the content.</p>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      )}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo-list">To-Do List</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { Home };