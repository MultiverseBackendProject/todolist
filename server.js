const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const toDoRoutes = require('./main_routes/toDoRoutes');
const routes = require('./routes');
const { auth } = require('express-openid-connect');
const { db } = require('./db');
require('dotenv').config();

//express app
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

const {
    AUTH0_SECRET,
    AUTH0_BASE_URL = 'http://localhost:3000',
    AUTH0_CLIENT_ID,
    AUTH0_ISSUER_BASE_URL,
} = process.env;
  
  const config = {
    authRequired: true,
    auth0Logout: true,
    secret: AUTH0_SECRET,
    baseURL: AUTH0_BASE_URL,
    clientID: AUTH0_CLIENT_ID,
    issuerBaseURL: AUTH0_ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.use(cors());
app.use('/', routes); //middleware routes
app.use('/todo', toDoRoutes); //todo routes

app.listen(PORT, () => {
    db.sync()
    console.log(`Server running on port: http://localhost:${PORT}`)});

module.exports = app;