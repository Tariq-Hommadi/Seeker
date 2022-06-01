import Card from 'react-bootstrap/Card'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function CardDescription(props) {

    const round =
    {
        backgroundColor: "#EAEEF1",
        borderRadius: "10px",

    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/questions?id=${props.pathID}`; 
      if(props.pathID == "62790623775c478196e8da1a")
      navigate(path);
    }

    return (
        <div>
            <Card className='h-100 CC shadow' style={round}>
                <Card.Header>Description</Card.Header>
                <Card.Body className=''>
                    <Card.Title>{props.rightTitle}</Card.Title>
                    <Card.Text>
                        {props.rightDescription}
                    </Card.Text>
                </Card.Body>
                <button className='Enroll-btn' onClick={routeChange}> Enroll In</button>
            </Card>
        </div>
    )
}
