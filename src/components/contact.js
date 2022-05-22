import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Map from "./map";
import * as fiIcons from 'react-icons/fi'
import * as bsIcons from 'react-icons/bs'

const Contact = () => {
     return (
          <>
               <Map />
               <section className="contact_container position-relative">
                    <Container>
                         <Row>
                              <Col md={4}>
                                   <div className="text-light">
                                        <h1>Get in touch</h1>
                                        <div className="mt-3">
                                             <a href="#" className='text-decoration-none btn btn-socials'>
                                                  <fiIcons.FiTwitter />
                                             </a>

                                             <a className="text-decoration-none btn btn-socials" href="#">
                                                  <fiIcons.FiGithub />
                                             </a>

                                             <a className="text-decoration-none btn btn-socials" href="#">
                                                  <bsIcons.BsWhatsapp />
                                             </a>
                                             
                                             <a className="text-decoration-none btn btn-socials" href="#">
                                                  <fiIcons.FiMail />
                                             </a>
                                             
                                        </div>

                                        <div className="mt-5">
                                             <div className="contact_info">
                                                  <h5 className="text-light">Phone:</h5>
                                                  <p className="text-muted">+(234) 7061 4331 38</p>
                                             </div>

                                             <div className="contact_info mt-4">
                                                  <h5 className="text-light">Email address:</h5>
                                                  <p className="text-muted">nathanfreelancedev@gmail.com</p>
                                             </div>

                                             <div className="contact_info">
                                                  <h5 className="text-light">Home address:</h5>
                                                  <p className="text-muted">Suit A19 /5 Pegi Estate, Abuja, Nigeria.</p>
                                             </div>
                                        </div>
                                   </div>
                              </Col>

                              <Col md={8}>
                                   <form action="" method="post">
                                        <Row>
                                             <Col md={6}>
                                                  <input className="form-control text-light" placeholder="Full name" type={'text'} />
                                             </Col>

                                             <Col md={6}>
                                                  <input className="form-control text-light" placeholder="Email address" type={'email'} />
                                             </Col>
                                        </Row>

                                        <div className="mt-4">
                                             <input className="form-control text-light" placeholder="Subject" type={'text'} />
                                        </div>

                                        <div className="mt-4">
                                             <textarea className="form-control text-light" placeholder="Message" rows={'7'}></textarea>
                                        </div>

                                        <div className="text-end mt-4">
                                             <Button variant="outline-light">
                                                  Submit message
                                             </Button>
                                        </div>
                                   </form>
                              </Col>
                         </Row>

                         <a className="text-decoration-none" href="#">
                              <Button variant="outline-light position-absolute bottom-0 end-0 me-3 mb-3">
                                   <bsIcons.BsArrowUp />
                              </Button>
                         </a>
                    </Container>
               </section>
          </>
     )
}

export default Contact