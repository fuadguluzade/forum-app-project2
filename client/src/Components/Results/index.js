import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

const RenderResults = props => {
    if (props.results.length > 0) {
        const lastCard = props.currentPage * props.perPage;
        const firstCard = lastCard - props.perPage;
        const currentCards = props.results.slice(firstCard, lastCard);
        return (
            currentCards.map((result, index) => {
                return (
                    <Row key={result.url}>
                        <Col>
                            <Link to={`/post/${props.perPage * (props.currentPage - 1) + index}`}>
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
    } else return ''
}




export default RenderResults;