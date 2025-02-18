import React, { useState } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    state: '',
    district: '',
    registrationNumber: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <>
      <Row className="justify-content-md-center">
  <Col md={8}>
    <Card>
      <Card.Header>Company Registration</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              name="companyName"
              placeholder="Enter the company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter the company email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  placeholder="Enter the city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  name="postalCode"
                  placeholder="Enter postal code"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-grid">
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </Col>
</Row>

    </>
  );
};

export default CompanyRegister;
