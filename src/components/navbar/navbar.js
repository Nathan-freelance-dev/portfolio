import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import './navbar.scss'

const MainNavbar = () => {
    return (
        <>
            <Navbar bg="transparent" className="fixed-top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Nathaneil.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            <Nav.Link className="text-dark active" href="#home">Home</Nav.Link>
                            <Nav.Link className="text-dark" href="#link">About</Nav.Link>
                            <Nav.Link className="text-dark" href="#link">Skills</Nav.Link>
                            <Nav.Link className="text-dark" href="#link">Services</Nav.Link>
                            <Nav.Link className="text-dark" href="#link">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <a href="#contact" className="text-decoration-none">
                        <Button variant="primary">Contact</Button>
                    </a>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;