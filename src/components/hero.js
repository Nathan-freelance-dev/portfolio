import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroImage from '../assets/images/hero-img.jpg'
import CallToAction from "./callToAction/callToAction";
import * as bsIcons from 'react-icons/bs'

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
                              <Col md={4}>
                                   <img width={'100%'} alt={"software developer"} src={HeroImage} />
                              </Col>

                              <Col md={8}>
                                   <div className="hero_text mt-5 text-dark">
                                        <h6 className="fw-normal">I'M NATHANIEL JOSEPH</h6>

                                        <h1 className="mt-4 text-uppercase">
                                             Frontend Developer based in Nigeria
                                        </h1>

                                        <p className="mt-3 text-muted fw-light">
                                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                        </p>

                                        <div className="mt-3 text-muted fw-light d-flex">
                                             <div className="ms-2">
                                                  <CallToAction 
                                                       text={"Say hello!"}
                                                  />
                                             </div>

                                             <div className="p-3">
                                                  <span>Coding / Designing / Hosting</span>
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