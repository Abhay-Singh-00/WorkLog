import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const SettingsPage = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <div className="container mt-5">
      <Card className="shadow">
        <Card.Body>
          <h5>Settings</h5>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Change Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleSave}>
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SettingsPage;
