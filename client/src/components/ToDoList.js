// ToDoList.js
import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Row, Col } from 'react-bootstrap';

function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <Form>
        <Row>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Col>
          <Col sm={2}>
            <Button onClick={handleAddTask}>Add</Button>
          </Col>
        </Row>
      </Form>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task}
            <Button
              variant="danger"
              className="float-right"
              onClick={() => handleRemoveTask(index)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ToDoList;