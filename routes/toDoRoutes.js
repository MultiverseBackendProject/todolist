const express = require('express');
const router = express.Router();
const { Todo } = require('../models/Todo');
const { validationResult } = require('express-validator');
const { requiresAuth } = require('express-openid-connect');

//sends back all items - GET/READ
router.get('/', requiresAuth(), async (req, res) => {
  try {
    const todolist = await Todo.findAll();
    res.status(200).json(todolist);
  } catch (error) {
    console.error(error);
    res.status(404).send('No tasks in our database');
  }
});

//send back task with specific id - GET/READ by id
router.get('/:id', requiresAuth(), async (req, res) => {
  try {
    //Check this - if task is not found, it returns a `null` value, which is not an error - make sure you handle this correctly!
    const task = await Todo.findByPk(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(404).send('Cannot find task');
  }
});

//add a todo to the list - POST/CREATE
router.post('/', requiresAuth(), async (req, res) => {
  try {
    const newTask = await Todo.create({
      task: req.body.task,
      done: req.body.done,
    });
    res.status(200).json(newTask);
  } catch {
    console.error(error);
    res.status(500).send('Cannot create task');
  }
});

//edit a todo - PUT/UPDATE
router.put('/:id', requiresAuth(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    } else {
      const todo = await Todo.findByPk(req.params.id);
      await todo.update({
        task: req.body.task,
        done: req.body.done,
      });
      res.status(200).json(todo);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Cannot update task');
  }
});

//delete a todo - DELETE
router.delete('/:id', requiresAuth(), async (req, res) => {
  try {
    await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send('Task has been deleted!');
  } catch (error) {
    console.error(error);
    res.status(404).send('Error deleting task');
  }
});

module.exports = router;
