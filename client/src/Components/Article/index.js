import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default (props) => {
    return (
        <Container>
            <Row className="mb-3">
                <Col className={"text-center"}>
                    <h1 className={"text-center"}>{props.article.title}</h1>
                    <Card.Img style={{ width: '35rem'}} src={props.article.urlToImage} />

                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <ListGroup>
                        <ListGroup.Item>Author: {props.article.author}</ListGroup.Item>
                        <ListGroup.Item>Published At: {props.article.publishedAt}</ListGroup.Item>
                        <ListGroup.Item>URL to full article: <a href={props.article.url}>{props.article.url}</a></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    {props.article.content}
                </Col>
            </Row>
        </Container>
    )
}