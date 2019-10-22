import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const RenderResults = props => {
    if (props.results) {
        return (
            props.results.map((result, index) => {
                return (
                    <Row key={result.url}>
                        <Col>
                            <Link to={`/post/${index}`}>
                                <Card style={{ width: '15rem' }} className='mb-3'>
                                    <Card.Img variant="top" src={result.urlToImage} />
                                    <Card.Header>{result.title}</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Author: {result.author}</ListGroup.Item>
                                        <ListGroup.Item>Source: {result.source.name}</ListGroup.Item>
                                        <ListGroup.Item>Date: {result.publishedAt}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                )
            })
        )
    }
}




export default RenderResults;