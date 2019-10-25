import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default (props) => {
    const log = props.log;
    let logLink, profLink;
    if (log) {
        logLink = <Nav.Link href='/login'>Logout</Nav.Link>
        profLink = <Nav.Link href='/profile'>Profile</Nav.Link>
    } else {
        logLink = <Nav.Link href='/login'>Login</Nav.Link>
        profLink = <Nav.Link href='/login'>Profile</Nav.Link>
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to='/'> <Navbar.Brand>Vox Populi</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    {logLink}
                    {profLink}
                    <Nav.Link href='/register'>Register</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
    