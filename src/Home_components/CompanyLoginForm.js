import React from "react";
import { Container, Row, Col, Card, Form, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CompanyLoginForm=()=>{
  const navigate=useNavigate();
  const navigateDashboard=(event)=>
  {
    event.preventDefault();
    navigate("/CompanyLogin");
  };
    return(
        <><Row className="justify-content-center">
        {/* Login Form Section */}
        <Col md={12} sm={10}>
          <Card className="shadow p-4">
            <Card.Body>
              <div className="text-center mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Company Logo"
                  className="mb-3"
                  style={{ width: "80px", height:"80px" }}
                />
                <h4 className="fw-bold">Company Login</h4>
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" onClick={navigateDashboard}>
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        </Row></>
    )
}
export default CompanyLoginForm;