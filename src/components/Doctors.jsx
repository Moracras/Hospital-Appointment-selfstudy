import { useState } from "react";
import { doctorData } from "../helpers/Data"
import {Container,Row,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';



const Doctors = () => {
    
    
  return (
    <Container >
        <Row className='justify-content-center'>
        {doctorData.map((mdoctor)=>(
            <Col xs={12} md={4}>
            <Card className="m-3">
            <Card.Img variant="top" src={mdoctor.img} />
            <Card.Title className='text-center fw-bold'>{mdoctor.name}</Card.Title>
            <Card.Text className='text-center fw-bold'>
                  {mdoctor.dep}
                </Card.Text>
            <Card.Body>
            </Card.Body>
          </Card>
          </Col>

          

        ))}
        </Row>   
    </Container>
    
  )
}

export default Doctors