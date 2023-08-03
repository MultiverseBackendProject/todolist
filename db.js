const { Sequelize } = require('sequelize');

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    host: 'localhost',
    storage: './db.sqlite',
    logging: false,
});

module.exports = { db }