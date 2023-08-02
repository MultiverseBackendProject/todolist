const { db, DataTypes } = require('../db')

const Todo = db.define("todos", {
    todo: DataTypes.STRING,
    done: DataTypes.BOOLEAN
});

module.exports = { Todo };