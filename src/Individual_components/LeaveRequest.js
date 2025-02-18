import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LeaveRequestPage = () => {
  const [leaveType, setLeaveType] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [reason, setReason] = useState('');
  const navigate=useNavigate();

  const handleSubmit = () => {
    alert(`Leave Request Submitted!\nType: ${leaveType}\nDate: ${leaveDate}\nReason: ${reason}`);
    navigate("/individualdashboard");
  };

  return (
    <div className="container mt-5">
      <Card className="shadow">
        <Card.Body>
          <h5>Leave Request</h5>
          <Form>
            <Form.Group controlId="formLeaveType">
              <Form.Label>Leave Type</Form.Label>
              <Form.Control
                as="select"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              >
                <option>Select Leave Type</option>
                <option>Annual Leave</option>
                <option>Sick Leave</option>
                <option>Casual Leave</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formLeaveDate" className="mt-3">
              <Form.Label>Leave Date</Form.Label>
              <Form.Control
                type="date"
                value={leaveDate}
                onChange={(e) => setLeaveDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formLeaveReason" className="mt-3">
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Reason for leave"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleSubmit}>
              Submit Request
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeaveRequestPage;
