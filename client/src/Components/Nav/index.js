import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default (props) => {
    const log = props.log;
    console.log(log)
    if (!log) {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Link to='/'> <Navbar.Brand>Vox Populi</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                        <Nav.Link href='/profile'>Profile</Nav.Link>
                        <Nav.Link href='/favorites'>Favorites</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    } else {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Link to='/'> <Navbar.Brand>Vox Populi</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <Nav.Link href='/login'>Logout</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                        <Nav.Link href='/profile'>Profile</Nav.Link>
                        <Nav.Link href='/favorites'>Favorites</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}