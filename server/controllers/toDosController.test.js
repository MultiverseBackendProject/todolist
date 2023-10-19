const request = require('supertest');
// express app
const app = require('../../server');

// db setup
const { db } = require('../db');
const { toDosController } = require("./toDosController")
const { Todo } = require('../models/Todo')

describe('endpoints', () => {
    beforeAll (async () => {
        await db.sync({ force: true }); // recreate db
    });

    it ('returns todo list', async () => {
        const server = "http://localhost:3000"
        const response = await request(server).get("/todos");
        expect(response.statusCode).toBe(302); //302 since user is not authorized
        const responseData = response.body;
        const todolist = responseData;
        const dbtodolist = await Todo.findAll();
        expect(todolist.task).toBe(dbtodolist.task)
    });

    it ('returns login page', async () => {
        const server = "http://localhost:3000"
        const response = await request(server).get("/auth/login");
        expect(response.statusCode).toBe(302);
    });
});