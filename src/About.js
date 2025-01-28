import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className=" mb-5">
            <h1 className="mt-5 mb-5">About Us</h1>
            <Row>
                <Col>
                <Card className='shadow'>
                        <Card.Body>
                            <Card.Title className="text-primary">Introduction</Card.Title>
                            <Card.Text>
                                Welcome to <strong>WorkLog</strong> – your ultimate solution for streamlined employee performance management and compensation tracking. 
                                At WorkLog, we aim to simplify workforce management by providing a platform that bridges the gap between performance evaluation and rewards, fostering a culture of accountability and growth.
                            </Card.Text>
           
                            <Card.Title className="text-primary">Our Mission</Card.Title>
                            <Card.Text>
                                Our mission is to empower organizations by offering a robust, user-friendly platform that prioritizes transparency, productivity, and employee motivation. 
                                With WorkLog, businesses can focus on driving growth while ensuring efficient management of their workforce.
                            </Card.Text>
                            <Card.Title className="text-primary">Why Choose Us?</Card.Title>
                            <Card.Text>
                                WorkLog stands out because of its intuitive design, data-driven insights, and seamless integration with existing systems. 
                                Built using modern Java-based full-stack technologies, we deliver a secure and scalable solution tailored to the unique needs of every organization.
                            </Card.Text>
                            <Card.Title className="text-primary">Our Vision</Card.Title>
                            <Card.Text>
                                To revolutionize workplace management by providing innovative solutions that align employee performance with recognition, ensuring businesses thrive in a competitive environment.
                            </Card.Text>
                            </Card.Body>
                
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
