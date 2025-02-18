import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="mb-5" id="contact">
            <h1 className="mt-5 mb-5">Contact Us</h1>
            <Row>
                <Col md={6}>
                    <Card className="mb-5 shadow">
                        <Card.Body>
                            <Card.Title className="text-primary">Get in Touch</Card.Title>
                            <Card.Text>
                                Have questions, feedback, or need assistance? We’d love to hear from you! Use the form below to send us a message, or reach out directly through the provided contact details.
                            </Card.Text>
                            <Card.Text>
                                <strong>Email:</strong> <a href="mailto:support@worklog.com">support@worklog.com</a>
                            </Card.Text>
                            <Card.Text>
                                <strong>Phone:</strong> +91 73559847..
                            </Card.Text>
                            <Card.Text>
                                <strong>Address:</strong> Pranveer Singh Institute of Technology, Department of Computer Science and Engineering, Kanpur, India
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-5 shadow">
                        <Card.Body>
                            <Card.Title className="text-primary">Send Us a Message</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Send Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
