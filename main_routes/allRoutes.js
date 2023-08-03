const { Todo } = require('../models/Todo');
const { validationResult } = require('express-validator');
const express = require('express');
const app = express();

const protected = (req, res, next) => {
    res.send(`THIS IS A PROTECTED ROUTE`)
}

const unprotected = (req, res, next) => {
    res.send(`Anyone can access this route`)
}

//CRUD ROUTES FOR TODOLIST: 

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

module.exports = {
    protected,
    unprotected
}