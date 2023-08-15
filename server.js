const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const toDoRoutes = require('./routes/toDoRoutes');
const authRoutes = require('./routes/authRoutes');
const { auth } = require('express-openid-connect');
const { db } = require('./db');
require('dotenv').config();

//express app
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

const { AUTH0_SECRET, AUTH0_BASE_URL, AUTH0_CLIENT_ID, AUTH0_ISSUER_BASE_URL } =
  process.env;

const config = {
  //set authRequired to false to enable unprotected routes like a home page etc
  authRequired: false,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: AUTH0_BASE_URL,
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  routes: {
    login: false,
    postLogoutRedirect: `/`,
  },
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use(cors());

//Home page - different response depending on if user is logged in or not
app.get('/', (req, res) => {
  if (req.oidc.user) {
    res.json({ response: `Hello, ${req.oidc.user.given_name}` }); //if logged in
  } else {
    res.json({ response: 'Hello there!' }); //no login present
  }
});

app.use('/auth', authRoutes); // login and logout
app.use('/todos', toDoRoutes); //todo routes

app.listen(PORT, () => {
  db.sync();
  console.log(`Server running on port: http://localhost:${PORT}`);
});

module.exports = app;
