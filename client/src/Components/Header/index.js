import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1 style={{fontSize: 44}}>Vox Populi</h1>
                    <p style={{fontSize: 30}}>
                        Komment yaz, be heard.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}