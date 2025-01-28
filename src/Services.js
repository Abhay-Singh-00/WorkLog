import React from 'react';
import {Card,Row, Col, Container} from 'react-bootstrap';
import ServicesData from './ServicesData';

const Servies=()=>{
    return(
        <div style={{backgroundColor:'transparent'}}>
         <Container>
            <h1>Services</h1>
            <Row>
               {ServicesData.map((val,index)=>(
                <Col xs={6} md={6} className="mt-5">
                    <Card style={{width:'38rem'}}>
                        <Row className='no-gutters'>
                        <Col md={4}>
                        <Card.Img variant="left" src={val.imgsrc} className='img-thumbnail' roundedCircle/>
                         </Col>
                         <Col md={8}>
                        <Card.Body>
                        <Card.Title className='mb-3'>{val.cardTitle}</Card.Title> 
                        <Card.Text>{val.cardText}</Card.Text>
                        </Card.Body>
                        </Col>
                        </Row>
                    </Card>
                </Col>
               ))}
            </Row>
         </Container>
        </div>
    )
}
export default Servies;