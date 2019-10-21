import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function SearchForm(props) {
    return (
        <Row className='mb-4'>
            <Col>
                <Form>
                    <Form.Group controlId="query">
                        <Form.Label>Enter the keyword to get the topics</Form.Label>
                        <Form.Control onChange={props.handleInputChange} type="text" placeholder="Keyword" name="queryWord" />
                    </Form.Group>

                    <Form.Group id="qInTitle">
                        <Form.Check type="checkbox" label="In title only" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Choose source country</Form.Label>
                            <Form.Control as="select" name="source" onChange={props.handleInputChange}>
                                <option>All coutries</option>
                                {props.sources.map(source => (
                                    <option key={Object.keys(source)}>
                                        {Object.keys(source)}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Choose article language</Form.Label>
                            <Form.Control as="select" name="language" onChange={props.handleInputChange}>
                            <option>All languages</option>
                                {props.languages.map(language => (
                                    <option key={Object.keys(language)}>
                                        {Object.keys(language)}
                                    </option>
                                ))}
                            </Form.Control>

                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Sort By</Form.Label>
                            <Form.Control as="select">
                                <option>publishedAt</option>
                                <option>relevancy</option>
                                <option>popularity</option>
                            </Form.Control>
                        </Form.Group>


                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Date From</Form.Label>
                            <Form.Control type="date" placeholder="From" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Date To</Form.Label>
                            <Form.Control type="date" placeholder="To" />
                        </Form.Group>

                    </Form.Row>

                    <Button onClick={props.handleFormSubmit} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchForm;




