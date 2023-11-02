import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Row, Col } from 'react-bootstrap';

function ToDoList() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '' || date.trim() === '') return;
    setTasks([...tasks, { task, date }]);
    setTask('');
    setDate('');
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container style={{ paddingTop: '3%' }}>
      <h1>To-Do List</h1>
      <Form>
        <Row>
          <Col sm={6}>
            <Form.Control
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              size="lg"
            />
          </Col>
          <br />
          <Col sm={3}>
            <Form.Control
              type="text"
              placeholder="Enter a date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              size="lg"
            />
          </Col>
          <br />
          <Col sm={3} className="text-right">
            <Button
              variant="primary"
              onClick={handleAddTask}
              size="lg"
            >
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task.task} - {task.date}
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
