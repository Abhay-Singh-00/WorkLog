import React, { useState } from 'react';
import { Card, Row, Col, ProgressBar, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar
import '../Dashboard.css'; // Import custom CSS for button hover effects
import TaskProgress from './TaskProgress';
import { Outlet,useLocation, useNavigate } from 'react-router-dom';
import '../Overlay.css';

const IndividualDashboard = () => {
  const [date, setDate] = useState(new Date()); // This state will hold the selected date
  const location=useLocation();
  const navigate=useNavigate();
  const overlayPaths=['/individualdashboard/LeaveRequest','/individualdashboard/report']

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const HandleNavigate=(route)=>{
    navigate(route);
  };
  return (
    <div className="container mt-5">
      <Row>
        {/* Profile Overview */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Body className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: '100px', height: '100px' }}
              />
              <h5>Abhay Singh</h5>
              <p>Software Engineer</p>
              <p>abhayrathore0022@gmail.com</p>
              <Button onClick={()=>navigate('/individualdashboard/LeaveRequest')} className="me-5 my-4 hover-button" style={{ backgroundColor: '#28a745' }}>
                Leave
              </Button>
              <Button className="me-5 hover-button" style={{ backgroundColor: '#007bff' }}>
                Advance
              </Button>
              <Button onClick={()=>navigate('/individualdashboard/report')} className="hover-button" style={{ backgroundColor: '#dc3545' }}>
                Report
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Task Progress */}
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <TaskProgress />
                </Col>
                <Col md={6} className="offset-md-2">
                  <Card>
                    <Card.Body>
                      <span className="d-flex justify-content-between">
                        <h5>Revenue for the Day</h5>
                        <h5 style={{ color: '#FF6F61' }}>: $500</h5>
                      </span>
                      <span className="d-flex justify-content-between">
                        <h5>Revenue for the Month</h5>
                        <h5 style={{ color: '#007bff' }}>: $500</h5>
                      </span>
                      <span className="d-flex justify-content-between">
                        <h5>Performance Reward</h5>
                        <h5 style={{ color: '#ffc107' }}>: $500</h5>
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="shadow mt-2">
            <Card.Body>
              <h5>Annual Presence Record</h5>
              <ProgressBar now={80} label="80%" className="mb-2" variant="success" />
            </Card.Body>
          </Card>
          <Card className="shadow">
            <Card.Body>
              <h5>Monthly Presence Record</h5>
              <ProgressBar now={60} label="60%" className="mb-2" variant="warning" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Notifications */}
        <Col md={7}>
          <Card className="shadow">
            <Card.Body>
              <h5>Notifications</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>New task assigned: Update the profile</ListGroup.Item>
                <ListGroup.Item>Meeting reminder: 3:00 PM today</ListGroup.Item>
                <ListGroup.Item>New message from HR</ListGroup.Item>
                <ListGroup.Item>Project update available</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Calendar */}
        <Col md={5}>
          <Card className="shadow d-flex align-items-center">
            <Card.Body>
              <h5 className="ms-0">Calendar</h5>
              <div className="border p-3 text-center">
                <Calendar onChange={handleDateChange} value={date} />
                <p className="mt-3 mb-0">
                  <strong>Selected Date:</strong> {date.toDateString()}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Overlay for Nested Route */}
      {overlayPaths.includes(location.pathname)   && (
        <div className="overlay">
          <Outlet />
        </div>
      )}
    </div>
)};

export default IndividualDashboard;
