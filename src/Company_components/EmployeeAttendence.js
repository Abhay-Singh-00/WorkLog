import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';

const EmployeeAttendancePage = () => {
  const attendanceData = [
    { date: '2024-11-01', status: 'Present' },
    { date: '2024-11-02', status: 'Absent' },
    { date: '2024-11-03', status: 'Present' },
    { date: '2024-11-04', status: 'Present' },
    { date: '2024-11-05', status: 'Sick Leave' },
  ];

  return (
    <div className="container mt-5">
      <Card className="shadow">
        <Card.Body>
          <h5>Attendance Record</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" className="mt-3">Mark Attendance</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmployeeAttendancePage;
