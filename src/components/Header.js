import React, {Components} from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">St. Francis House</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                    <Nav.Link href="staff">Staff</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;