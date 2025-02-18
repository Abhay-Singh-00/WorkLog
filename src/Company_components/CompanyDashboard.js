import React from 'react';
import { Container, Row, Col, Card, Table, ProgressBar, Button, CardBody } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CompanyDashboard = () => {
  const navigate=useNavigate();
  const ManagerDashboard=()=>
  {
    navigate("/ManagersPage");
  };
  const AdminPanel=()=>
  {
    navigate("/adminpanel");
  }
  return (
    <Container fluid className="p-4">
      <h2 className="mb-4">Company Dashboard</h2>
      
      {/* Overview Section */}
      <Row className="mb-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Employees</Card.Title>
              <h3>150</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Active Employees</Card.Title>
              <h3>120</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Monthly Payroll</Card.Title>
              <h3>$50,000</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Pending Appraisals</Card.Title>
              <h3>10</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Performance Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Department-wise Performance</Card.Title>
              <ProgressBar now={75} label="75%" className="mb-2" />
              <ProgressBar variant="info" now={60} label="60%" className="mb-2" />
              <ProgressBar variant="danger" now={45} label="45%" />
            </Card.Body>
          </Card>
          <Button className='my-4' variant="danger" onClick={ManagerDashboard}>Manage</Button>
          <Button className='my-4 ms-4' variant="warning" onClick={AdminPanel}>Control Room</Button>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Top Performing Employees</Card.Title>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>95%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>90%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Task Management Section */}
      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Ongoing Projects</Card.Title>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website Redesign</td>
                    <td><Button variant="success" size="sm">On Track</Button></td>
                    <td>Dec 31, 2024</td>
                  </tr>
                  <tr>
                    <td>App Development</td>
                    <td><Button variant="warning" size="sm">At Risk</Button></td>
                    <td>Jan 15, 2025</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Notifications Section */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <ul>
                <li>Appraisal deadline for John Doe is Nov 30, 2024.</li>
                <li>Holiday announcement: Office closed on Dec 25, 2024.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyDashboard;
