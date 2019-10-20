import React, {Component} from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class Input extends Component {
    state = {
        queryWord: ''
    }

    getNews = event => {
        event.preventDefault();
        let key = '&apiKey=3e881f33678b4d4baadff76c2fc9ec83';
        let url = `https://newsapi.org/v2/everything?`;
        let query = `q=${this.state.queryWord}`
        let queryURL = url + query + key;
        axios.get(queryURL)
            .then(response => {
                this.props.giveData(response.data.articles);
            })
            .catch(e => { console.log(e) })
            
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({
            queryWord: value
        })
    }

    render () {
        return (
            
                <Row className='mb-3'>
                    <Col>
                        <Form>
                            <Form.Group controlId="query">
                                <Form.Label>Enter the keyword to get the topics</Form.Label>
                                <Form.Control onChange={this.handleInputChange} type="text" placeholder="Keyword" />
                            </Form.Group>
    
                            <Button onClick={this.getNews} variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
    
        )
    }
}



