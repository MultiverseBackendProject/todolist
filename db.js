const { Sequelize } = require('sequelize');

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    logging: false,
    storage: './db.sqlite'
});

module.exports = { db }