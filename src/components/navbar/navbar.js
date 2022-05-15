import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import './navbar.scss'
import * as faIcons from 'react-icons/fa'

const MainNavbar = () => {
    return (
        <>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand>Nathan.</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-5 mt-2 me-auto">
                            <Nav.Link className="active">Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Skills</Nav.Link>
                            <Nav.Link>Services</Nav.Link>
                            <Nav.Link>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Nav>
                        <Nav.Link>
                            <faIcons.FaPhoneAlt className="me-2" /> Contact
                        </Nav.Link>
                    </Nav>
                    <Navbar.Toggle className="me-5 bg-light shadow-none" aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;