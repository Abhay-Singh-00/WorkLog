import React from 'react';
import {Container, Row,Col,Card} from 'react-bootstrap';

const About=()=>
{
    return(<Container>
        <h1 className='mt-5 mb-5'> About Us
        </h1>
        <Row>
            <Col>
                <Card className='mb-5'>
                    <Card.Body>
                        <Card.Title>
                            Introduction
                        </Card.Title>
                        <Card.Text>
                            WorkLog is a platform that provides a comprehensive solution for managing employees, projects, and tasks. It is designed 
                            to help companies manage their workforce more efficiently and effectively. With WorkLog, companies can easily track performance
                            of their employees and their company. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
)}
export default About;