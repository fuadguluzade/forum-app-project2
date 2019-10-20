import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Vox Populi</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>Link1</Nav.Link>
                    <Nav.Link>Link2</Nav.Link>
                    <Nav.Link>Link3</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}