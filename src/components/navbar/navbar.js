import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './navbar.scss'

const MainNavbar = () => {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} bg="transparent" expand={expand} className="mb-3 fixed-top">
                    <Container fluid>
                        <NavLink to='/' className="text-decoration-none">
                            <Navbar.Brand className="fw-bold text-light fs-4" href="#">
                                Nathan
                            </Navbar.Brand>
                        </NavLink>
                        <Navbar.Toggle className="border-0 shadow-none bg-light" aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby=  {`offcanvasNavbarLabel-expand-${expand}`} placement="start">
                            <Offcanvas.Header className="sidebar" closeButton>
                                <Offcanvas.Title className="fw-bold fs-4 text-light" id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Nathaniel
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className="sidebar pt-5">
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link className="text-light fs-4">Home</Nav.Link>
                                    <Nav.Link className="text-light fs-4">About</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default MainNavbar;