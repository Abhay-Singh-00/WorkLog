import React from 'react';
import {Container, ProgressBar,Row,Col,Card,Table} from 'react-bootstrap';

const sales=()=>{
    return(
        <>
            <h1>Sales</h1>
            <Row className='mt-4'>
                <Col md={4} className='mb-4 mb-md=0'>
                     <Card className='text-center p-3'>
                        <Card.Title>
                            Total Sales
                        </Card.Title>
                        <h2>$20000</h2>
                        <ProgressBar now={75} label={'75%'}/>
                     </Card>
                </Col>
                <Col md={4} className='mb-4 mb-md=0'>
                    <Card className='text-center p-3'>
                        <Card.Title>
                            Top Selling Product
                        </Card.Title>
                        <h2>Mobile</h2>
                        <Card.Text>Sales:$15000</Card.Text>
                    </Card>
                </Col>
                <Col md={4} className='mb-4 mb-md=0'>
                    <Card className='text-center p-3'>
                        <Card.Title>
                            Target Achievement
                        </Card.Title>
                        <h2>85%</h2>
                        <ProgressBar now={85} label={'85%'}/>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                  <Card>
                    <Card.Header>
                        Sales Report
                    </Card.Header>
                    <Card.Body>
                    <Table striped bordered hover>
                  <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Sales</th>
                        <th>Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mobile</td>
                        <td>$15000</td>
                        <td>$1400</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Laptop</td>
                        <td>$5000</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Keyboard</td>
                        <td>$500</td>
                        <td>$100</td>
                    </tr>
                  </tbody>
                </Table>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                  <Card>
                    <Card.Header>
                        Salesperson Performance
                    </Card.Header>
                    <Card.Body>
                    <Table striped bordered hover>
                  <thead>
                    <tr>
                        <th>#</th>
                        <th>Salesperson</th>
                        <th>Sales</th>
                        <th>Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>Astit</td>
                        <td>$15000</td>
                        <td>$1400</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Abhay</td>
                        <td>$5000</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vishal</td>
                        <td>$500</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Adarsh</td>
                        <td>$500</td>
                        <td>$100</td>
                    </tr>
                  </tbody>
                </Table>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
        </>
    )
};

export default sales;