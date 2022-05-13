import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CallToAction from "../cta";

const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="hero_text">
                                <h5 className="text-muted fw-light">Hi, I am Nathaneil</h5>
                                <h1 className="text-dark fw-bold">Frontend Developer</h1>

                                <p className="mt-3 text-muted">
                                    Based in Nigeria, I create projects based around design and development.
                                </p>

                                <div className="mt-4">
                                    <CallToAction />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hero;