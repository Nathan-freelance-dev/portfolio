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
                    <Navbar.Toggle className="bg-light shadow-none" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-5 mt-2 me-auto">
                            <Nav.Link className="active">Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            {/* <Nav.Link>Skills</Nav.Link> */}
                            <Nav.Link>Services</Nav.Link>
                            {/* <Nav.Link>Projects</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;