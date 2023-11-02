import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Auth0Provider
          domain="https://dev-kjcleoengqv06t8c.us.auth0.com"
          clientId="4HaNA3owBvlFnpyNrBzUugSZD6NAgsLk"
          authorizationParams={{
            redirect_uri: "http://localhost:1234/callback"
          }}
        >
        <App />
      </Auth0Provider>
  </BrowserRouter>
);

reportWebVitals();