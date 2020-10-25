import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'

const CardRow = ({ className, name, avatar, desc, github, sm1, sm2 }) => {
    return className !== 'normal' ?
    (<Row className = {className}>
        <Col sm = {sm1}>
            <Card.Img variant = 'top' src = {avatar} align = 'left' />
        </Col>
        <Col className = 'akkkkki' sm = {sm2}>
            <Card.Body className = 'sans'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Button variant = 'dark' href = {`https://github.com/${github}`}>Github</Button>
            </Card.Body>
        </Col>
    </Row>)
    :
    (
        <div className = 'normal'>
            <Card.Img variant = 'top' src = {avatar} align = 'left' />
            <Card.Body className = 'sans'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Button variant = 'dark' href = {`https://github.com/${github}`}>Github</Button>
            </Card.Body>
        </div>
    )
}


export default CardRow