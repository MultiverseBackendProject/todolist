import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function ToDoList() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task.trim() === '' || !date) return;
    const formattedDate = date ? format(date, 'MM-dd-yyyy') : '';
    setTasks([...tasks, { task, date: formattedDate, isEditing: false }]);
    setTask('');
    setDate(null);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = !updatedTasks[index].isEditing;
    setTasks(updatedTasks);
    if (updatedTasks[index].isEditing) {
      setTask(updatedTasks[index].task);
      setDate(new Date(updatedTasks[index].date)); 
    } else {
      setTask('');
      setDate(null);
    }
    setEditIndex(updatedTasks[index].isEditing ? index : -1);
  };

  const handleSaveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].task = task;
    updatedTasks[index].date = format(date, 'MM-dd-yyyy'); 
    updatedTasks[index].isEditing = false;
    setTasks(updatedTasks);
    setTask('');
    setDate(null);
    setEditIndex(-1);
  };

  return (
    <Container className="heading">
      <h1>To-Do List</h1>
      <Form>
        <Row>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              size="lg"
              className="same-height-input"
            />
          </Col>
          <Col sm={2}>
            <Form.Group controlId="date" className="d-flex align-items-center">
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                placeholderText="Select a date"
                dateFormat="MM-dd-yyyy"
                className="form-control same-height-input"
              />
            </Form.Group>
          </Col>
          <Col sm={2}>
            {editIndex === -1 ? (
              <Button
                variant="primary"
                onClick={handleAddTask}
                size="lg"
              >
                Add
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => handleSaveTask(editIndex)}
                size="lg"
              >
                Save
              </Button>
            )}
          </Col>
        </Row>
      </Form>
      <br />
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            <Row>
              <Col sm={12}>
                {task.isEditing ? (
                  <div>
                    <input
                      type="text"
                      value={task.task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                    <DatePicker
                      selected={date}
                      onChange={(newDate) => setDate(newDate)}
                      dateFormat="MM-dd-yyyy"
                    />
                  </div>
                ) : (
                  <span>
                    {task.task} - {task.date}
                  </span>
                )}
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                {task.isEditing ? (
                  <Button
                    variant="success"
                    onClick={() => handleSaveTask(index)}
                    size="lg"
                    style={{ width: '100px' }}
                    className="ml-2 mr-2"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="info"
                    onClick={() => handleToggleEdit(index)}
                    size="lg"
                    style={{ width: '100px' }}
                    className="ml-2 mr-2"
                  >
                    Edit
                  </Button>
                )}
                <>          </>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveTask(index)}
                  size="lg"
                  style={{ width: '100px' }}
                  className="ml-2 mr-2"
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ToDoList;