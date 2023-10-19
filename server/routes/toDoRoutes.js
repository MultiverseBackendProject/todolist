const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const {
  createToDo,
  getToDoById,
  updateToDoById,
  getAllTodos,
  deleteToDoById,
} = require('../controllers/toDosController');

//sends back all items - GET/READ
router.get('/', requiresAuth(), getAllTodos);

//send back task with specific id - GET/READ by id
router.get('/:id', requiresAuth(), getToDoById);
//add a todo to the list - POST/CREATE
router.post('/', requiresAuth(), createToDo);
//edit a todo - PUT/UPDATE
router.put('/:id', requiresAuth(), updateToDoById);

//delete a todo - DELETE
router.delete('/:id', requiresAuth(), deleteToDoById);

module.exports = router;
