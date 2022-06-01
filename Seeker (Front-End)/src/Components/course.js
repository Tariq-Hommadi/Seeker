import React from 'react';


import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
{/*import './course.css';*/}
function Course(props) {



    return(
        <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>provider: {props.provider}</Card.Text>
        <Card.Text>price: {props.price}</Card.Text>

        <Button variant="primary">add to favorites</Button>
        <Button variant="primary">add to course list</Button>

    </Card.Body>
    </Card>
           

        </div>

    );


}

export default Course