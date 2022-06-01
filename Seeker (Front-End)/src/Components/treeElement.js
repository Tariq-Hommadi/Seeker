import React from 'react';

import './../styles.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
{/*import './course.css';*/}
function Course(props) {



    return(
        <div >
    <Card className='background treeElementCard treeElement' style={{ width: '25rem' }}>
    <Card.Body className='text treeElement'>        
    <Card.Text className='rating '>{props.rating}</Card.Text>
        <Card.Title>{props.title}</Card.Title>
      
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>provider: {props.provider}</Card.Text>
        <Card.Text>cost: {props.cost}</Card.Text>

    
    </Card.Body>
    </Card>
           

        </div>

    );


}

export default Course