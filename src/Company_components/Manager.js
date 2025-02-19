import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';
import Sales from './Sales';

const ManagersPage = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [task, setTask] = useState({
    employee: '',
    description: '',
    deadline: '',
    priority: 'Normal',
  });

  const handleShowTaskModal = () => setShowTaskModal(true);
  const handleCloseTaskModal = () => setShowTaskModal(false);

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAssignTask = () => {
    console.log('Task Assigned:', task);
    handleCloseTaskModal();
  };

  return (
    <Container fluid className="p-4">
      <h2 className="mb-4">Manager's Dashboard</h2>

      {/* Task Assignment Section */}
      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Assign Task to Employee</Card.Title>
              <Button variant="primary" onClick={handleShowTaskModal}>
                Assign New Task
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Overview Section */}
      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Team Overview</Card.Title>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Employee Name</th>
                    <th>Current Task</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Prepare Sales Report</td>
                    <td>In Progress</td>
                    <td>
                      <Button variant="warning" size="sm" className="me-2">
                        Reassign
                      </Button>
                      <Button variant="danger" size="sm">
                        Remove
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>Client Presentation</td>
                    <td>Completed</td>
                    <td>
                      <Button variant="warning" size="sm" className="me-2">
                        Reassign
                      </Button>
                      <Button variant="danger" size="sm">
                        Remove
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Performance Analytics Section */}
      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Team Performance Analytics</Card.Title>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Tasks Completed</th>
                    <th>Performance Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>5</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>7</td>
                    <td>Good</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Task Assignment Modal */}
      <Modal show={showTaskModal} onHide={handleCloseTaskModal}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Employee</Form.Label>
              <Form.Control
                as="select"
                name="employee"
                value={task.employee}
                onChange={handleTaskChange}
              >
                <option value="">Select Employee</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task description"
                name="description"
                value={task.description}
                onChange={handleTaskChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                name="deadline"
                value={task.deadline}
                onChange={handleTaskChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                name="priority"
                value={task.priority}
                onChange={handleTaskChange}
              >
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTaskModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAssignTask}>
            Assign Task
          </Button>
        </Modal.Footer>
      </Modal>
      <Sales/>
    </Container>
  );
};

export default ManagersPage;
