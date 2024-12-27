import React from 'react';
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap';

const AdminPanelPage = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <h5>Manage Employees</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>John Doe</ListGroup.Item>
                <ListGroup.Item>Jane Smith</ListGroup.Item>
                <ListGroup.Item>Paul Walker</ListGroup.Item>
                <ListGroup.Item>Emma Brown</ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="mt-3">View All Employees</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <h5>Task Overview</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>Task 1: 80% completed</ListGroup.Item>
                <ListGroup.Item>Task 2: 50% completed</ListGroup.Item>
                <ListGroup.Item>Task 3: 20% completed</ListGroup.Item>
              </ListGroup>
              <Button variant="secondary" className="mt-3">View All Tasks</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card className="shadow">
            <Card.Body>
              <h5>Pending Requests</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>Leave Request - John Doe</ListGroup.Item>
                <ListGroup.Item>Advance Request - Jane Smith</ListGroup.Item>
                <ListGroup.Item>Report Request - Paul Walker</ListGroup.Item>
              </ListGroup>
              <Button variant="danger" className="mt-3">Approve All Requests</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelPage;
