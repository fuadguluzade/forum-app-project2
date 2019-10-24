import React from 'react';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';

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
                        <Form.Check type="checkbox" label="In title only" onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Results on page</Form.Label>
                            <Form.Control as="select" name="perPage" onChange={props.handleValidation}>
                                <option>10</option>
                                <option>30</option>
                                <option>50</option>
                                <option>70</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Choose article language</Form.Label>
                            <Form.Control as="select" name="language" onChange={props.handleInputChange}>
                                <option></option>
                                {props.languages.map(language => (
                                    <option key={Object.keys(language)}>
                                        {Object.keys(language)}
                                    </option>
                                ))}
                            </Form.Control>

                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Sort By</Form.Label>
                            <Form.Control as="select" name="sortBy" onChange={props.handleInputChange}>
                                <option>publishedAt</option>
                                <option>relevancy</option>
                                <option>popularity</option>
                            </Form.Control>
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




