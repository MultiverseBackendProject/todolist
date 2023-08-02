const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.json());

//will change to sqlize methods after creating db for our data

//sample data (just for now)
let todolist = [
    { id: 1, todo: 'eat breaky', done: 'yes' },
    { id: 2, todo: 'work out', done: 'yes' },
    { id: 3, todo: 'cry', done: 'yes' }
];

//sends back all items - GET/READ
app.get("/", (req, res) => {
    res.send(todolist)
});

//send back todo with specific id - GET/READ by id
app.get("/:id", (req, res) => {
    todo = todolist.filter((todo, idx) => idx === Number(req.params.id - 1));
    res.send(todo);
});

//add a todo to the list - POST/CREATE
app.post("/todo", (req, res) => {
    const { id, todo, done } = req.body;
    todolist.push({ id, todo, done });
    res.send(todolist);
});

//edit a todo - PUT/UPDATE
app.put("/todo:id", (req, res) => {
    const { todo, done } = req.body;
    todolist[req.params.id].todo = todo; 
    todolist[req.params.id].done = done;
    res.send(todolist);
});

//delete a todo - DELETE
app.delete("/todo:id", (req, res) => {
    todo = todolist.filter((todo, idx) => idx !== Number(req.params.id));
    res.send(todo);
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

module.export = app;