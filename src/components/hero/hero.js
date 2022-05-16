import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import darkEmote from '../../assets/image/me-dark.webp'
import dot from '../../assets/image/download.png'

const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="hero_text">
                                <h6 className="text-muted">
                                    Hello 👋, I am Nathaniel
                                </h6>

                                <h1 className="text-light">
                                    Frontend Developer
                                </h1>

                                <div className="mt-4">
                                    <a className="btn btn-primary btn-lg" href="#contact">Say Hello</a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className="hero_emote">
                        <div className="dot">
                            <img src={ dot } width="100%" alt="dot" />
                        </div>

                        <img src={ darkEmote } className="me" alt="me" />
                    </div>
                </Container>

                <div className="wave_svg">
                    <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" class="Hero__Swoops-sc-13y35jq-4 laHbQG"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
                </div>
            </section>
        </>
    )
}

export default Hero;