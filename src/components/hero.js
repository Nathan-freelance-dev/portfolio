import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import HeroImage from '../assets/images/hero-img.jpg'
import CallToAction from "./callToAction/callToAction";
import * as bsIcons from 'react-icons/bs'
import resume from '../assets/resume/Resume.pdf'

const Hero = () => {
     return (
          <>
               <section className="hero-container">
                    <Container>
                         <a className="text-decoration-none" href="#services">
                              <button className="btn btn-ouline-dark btn-lg scroll_down">
                                   <bsIcons.BsArrowDown />
                              </button>
                         </a>

                         <Row>
                              {/* <Col md={4}>
                                   <img width={'100%'} alt={"software developer"} src={HeroImage} />
                              </Col> */}

                              <Col md={12}>
                                   <div className="hero_text mt-5 text-dark">
                                        <h5 className="fw-normal">I'M NATHANIEL JOSEPH</h5>

                                        <h1 className="mt-4 text-uppercase">
                                             Frontend Developer based in Nigeria.
                                        </h1>

                                        <p className="mt-3 text-muted">
                                             I am a front-end website developer with over 3years of experience, I have the necessary skills needed from a front-end web developer, these skills include: HTML, CSS, JAVASCRIPT, Node.js, React.js, Bootstrap, SCSS, I also use tools like: Github.
                                        </p>

                                        <div className="mt-5 text-muted fw-light d-flex">
                                             <div>
                                                  <a className="text-decoration-none" href="#contact">
                                                       <CallToAction 
                                                            text={"Say hello right now!"}
                                                       />
                                                  </a>
                                             </div>

                                             <div className="ms-3">
                                                  <a href={resume} download className="text-decoration-none cta btn btn-outline-dark btn-lg">
                                                       <bsIcons.BsCloudArrowDown className="me-2" /> Download Resume
                                                  </a>
                                             </div>
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