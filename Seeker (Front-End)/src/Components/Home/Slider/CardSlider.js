import React from 'react'
import Card from 'react-bootstrap/Card'
import './Slider.css'


export default function CardSlider(props) {

    const CardStyle =
    {
        backgroundColor: "rgb(228,233,237)",
        borderRadius: "10px",
    }

    const title = {
        color: "#023E8A",
        fontSize: "12px",
        fontWeight: "500",
        letterSpacing: "2px",
        marginBottom: "22px",
        textTransform: "uppercase",
    }

    return (
        <div className='mb-5 ' >
            <Card className='h-100 cen shadow' style={CardStyle}>

                <div className='parent w-75'>
                    <Card.Img src={props.imageSlider} className='child w-100' />
                </div>
                <Card.Body style={CardStyle}>
                    <Card.Title style={title}>{props.leftTitle}</Card.Title>
                    <Card.Text>
                        {props.leftDescription}

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


