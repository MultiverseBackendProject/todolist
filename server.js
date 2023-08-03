require('dotenv').config('.env');
const express = require('express');
const app = express();
const path = require('path');
const { db } = require('./db')
const { Todo } = require('./models/Todo');
const { validationResult } = require('express-validator');

// const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//sample data (just for now)
let todolist = [
    { id: 1, task: 'eat breaky', done: 'yes' },
    { id: 2, task: 'work out', done: 'yes' },
    { id: 3, task: 'cry', done: 'yes' }
];

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

const { auth } = require('express-openid-connect');

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

app.listen(PORT, () => {
    db.sync()
    console.log(`Server running on port: http://localhost:${PORT}`)});

module.export = app;