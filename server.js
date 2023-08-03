const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const { auth } = require('express-openid-connect');
const { db } = require('./db');
const { Todo } = require('./models/Todo');
const { validationResult } = require('express-validator');
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

//sends back all items - GET/READ
app.get("/todo", async (req, res) => {
    try {
        const todolist = await Todo.findAll()
        res.status(200).json(todolist)
    } catch(error){
        console.error(error)
        res.status(404).send('No tasks in our database')
    }
});

//send back task with specific id - GET/READ by id
app.get("/todo/:id", async (req, res) => {
    try {
        const task = await Todo.findByPk(req.params.id)
        res.status(200).json(task)
    } catch(error){
        console.error(error)
        res.status(404).send('Cannot find task')
    }
});

//add a todo to the list - POST/CREATE
app.post("/todo", async (req, res) => {
    try {
        const newTask = await Todo.create({
            task: req.body.task,
            done: req.body.done
        })
        res.status(200).json(newTask)
    } catch {
        console.error(error)
        res.status(500).send('Cannot create task')
    }
});

//edit a todo - PUT/UPDATE
app.put("/todo/:id", async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            res.json({errors: errors.array()})
        } else {
            const todo = await Todo.findByPk(req.params.id)
            await todo.update({
                task: req.body.task,
                done: req.body.done
            })
            res.status(200).json(todo)
        }
    } catch(error){
        console.log(error)
        res.status(500).send('Cannot update task')
    }
});

//delete a todo - DELETE
app.delete("/todo/:id", async (req, res) => {
    try {
        await Todo.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Task has been deleted!')
    } catch(error){
        console.error(error)
        res.status(404).send('Error deleting task')
    }
});

app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
    db.sync()
    console.log(`Server running on port: http://localhost:${PORT}`)});

module.exports = app;