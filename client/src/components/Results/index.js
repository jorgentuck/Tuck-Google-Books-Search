import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';

export default function Results(props) {
    return (
        <Container style={{ border: '2px solid #000000' }} className='mx-3' fluid>
            <Row className='my-3'>
                <Col xs={10}>
                    <h5>{props.title}</h5>
                </Col>
                <Col xs={1}>
                    <Button rel='noreferrer' target='_blank' href={props.link} variant='dark'>View</Button>
                </Col>
                <Col xs={1}>
                    <Button variant='dark'>Save</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Written By: {props.authors.join(', ')}</p>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col xs={2}>
                    <img alt={props.title} src={props.image} />
                </Col>
                <Col xs={10}>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </Container>
    )
}
