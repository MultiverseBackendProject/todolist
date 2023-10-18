const { Todo } = require('../models/Todo');
const { validationResult } = require('express-validator');

exports.createToDo = async (req, res) => {
  try {
    const newTask = await Todo.create({
      task: req.body.task,
      done: req.body.done
    });
    res.status(200).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).send('Cannot create task');
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todolist = await Todo.findAll({
      attributes: { exclude: ['createdBy'] } //since we only want to show this column when getting task by id, excluding for all tasks
    });
    res.status(200).json(todolist);
  } catch (error) {
    console.error(error);
    res.status(404).send('No tasks in our database');
  }
};

exports.getToDoById = async (req, res) => {
  try {
    const task = await Todo.findByPk(req.params.id);
    if (task === null) {
      res.status(404).send("No task with this id exists.")
    } else {
      await task.update({
        createdBy: req.oidc.user.given_name //updating the response to send back this data, along with the task
      });
      res.status(200).json(task);
    }
  } catch (error) {
    console.error(error);
    res.status(404).send('Cannot find task');
  }
};

exports.updateToDoById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    } else {
      const todo = await Todo.findByPk(req.params.id);
      await todo.update({
        task: req.body.task,
        done: req.body.done
      });
      res.status(200).json(todo);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Cannot update task');
  }
};

exports.deleteToDoById = async (req, res) => {
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
};
