import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to='/'> <Navbar.Brand>Vox Populi</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Nav.Link>Link1</Nav.Link>
                    <Nav.Link>Link2</Nav.Link>
                    <Nav.Link>Link3</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}