import React from "react";
import { Container } from "react-bootstrap";
import MainNavbar from '../navbar/navbar'
import darkEmote from '../../assets/image/me-dark.webp'
import dot from '../../assets/image/download.png'

const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <MainNavbar />

                <Container>
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