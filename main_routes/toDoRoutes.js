const express = require('express');
const router = express.Router();
const { Todo } = require('../models/Todo');
const { validationResult } = require('express-validator');

router.use((req, res, next) => {
    console.log('Welcome to your To-Do List!')
    next();
});

//sends back all items - GET/READ
router.get("/", async (req, res) => {
    try {
        const todolist = await Todo.findAll()
        res.status(200).json(todolist)
    } catch(error){
        console.error(error)
        res.status(404).send('No tasks in our database')
    }
});

//send back task with specific id - GET/READ by id
router.get("/:id", async (req, res) => {
    try {
        const task = await Todo.findByPk(req.params.id)
        res.status(200).json(task)
    } catch(error){
        console.error(error)
        res.status(404).send('Cannot find task')
    }
});

//add a todo to the list - POST/CREATE
router.post("/", async (req, res) => {
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
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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

module.exports = router;
