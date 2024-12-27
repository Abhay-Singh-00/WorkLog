import React from 'react';
import { Card, Button, Table, Form } from 'react-bootstrap';

const ReportsPage = () => {
  return (
    <div className="container mt-5">
      <Card className="shadow">
        <Card.Body>
          <h5>Generate Report</h5>
          <Form>
            <Form.Group controlId="formReportType">
              <Form.Label>Select Report Type</Form.Label>
              <Form.Control as="select">
                <option>Performance Report</option>
                <option>Financial Report</option>
                <option>Project Progress Report</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" className="mt-3">Generate Report</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="shadow mt-4">
        <Card.Body>
          <h5>Generated Reports</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Report Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Performance Report</td>
                <td>2024-11-01</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Financial Report</td>
                <td>2024-11-02</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Project Progress Report</td>
                <td>2024-11-03</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReportsPage;
