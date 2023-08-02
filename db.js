const { Sequelize } = require('sequelize');

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    logging: false
});

module.exports = { db }