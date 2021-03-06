import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row, Button, Toast } from "react-bootstrap";
import Map from "./map";
import * as fiIcons from 'react-icons/fi'
import * as bsIcons from 'react-icons/bs'
import * as siIcons from 'react-icons/si'

const date = new Date();

const year = date.getFullYear();

const Contact = () => {
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm('service_4ga8ugv', 'template_d29k7ur', form.current, '0l8rCYMY6l7VfEi2u')
               .then((result) => {
                    if (result.text === "OK") {
                         <Toast show={showA} onClose={toggleShowA}>
                              <Toast.Header>
                                   <bsIcons.BsBell className='me-2' /> 
                                   <strong className="me-auto">Notification</strong>
                                   <small>now</small>
                              </Toast.Header>
                              <Toast.Body>Message sent successfully</Toast.Body>
                         </Toast>
                    }
               }, (error) => {
                    console.log(error.text);
               });
     };

     const [showA, setShowA] = useState(false);

     const toggleShowA = () => setShowA(!showA);

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
                                             <a rel="noreferrer" href="https://twitter.com/bigNath0128" target={'_blank'} className='text-decoration-none btn btn-socials'>
                                                  <fiIcons.FiTwitter />
                                             </a>

                                             <a rel="noreferrer" className="text-decoration-none btn btn-socials" href="https://github.com/Nathan-freelance-dev" target={'_blank'}>
                                                  <fiIcons.FiGithub />
                                             </a>

                                             <a rel="noreferrer" className="text-decoration-none btn btn-socials" href="https://www.linkedin.com/in/nathaniel-joesph-50780423b/" target={'_blank'}>
                                                  <bsIcons.BsLinkedin />
                                             </a>
                                             
                                             <a rel="noreferrer" className="text-decoration-none btn btn-socials" href="https://www.upwork.com/freelancers/~01e62025b83e0b0aa5" target={'_blank'}>
                                                  <siIcons.SiUpwork />
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
                                   <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                             <Col md={6}>
                                                  <input className="form-control text-light" placeholder="Full name" name='user_name' required type={'text'} />
                                             </Col>

                                             <Col md={6}>
                                                  <input className="form-control text-light" placeholder="Email address" name='user_email' required type={'email'} />
                                             </Col>
                                        </Row>

                                        <div className="mt-4">
                                             <input className="form-control text-light" placeholder="Subject" type={'text'} required name='subject' />
                                        </div>

                                        <div className="mt-4">
                                             <textarea className="form-control text-light" placeholder="Message" required name='message' rows={'7'}></textarea>
                                        </div>

                                        <div className="text-end mt-4">
                                             <input value="Send message" type="submit" className='btn btn-outline-light' />
                                        </div>
                                   </form>
                              </Col>
                         </Row>

                         <a className="text-decoration-none" href="#">
                              <Button variant="outline-light position-absolute bottom-0 end-0 fs-3 me-3 mb-3">
                                   <bsIcons.BsArrowUp />
                              </Button>
                         </a>

                         {/* toast message bug not fixed */}

                         {/* { sendForm === "sendForm" ? 
                              <Toast show={showA} onClose={toggleShowA}>
                                   <Toast.Header>
                                        <bsIcons.BsBell className='me-2' /> 
                                        <strong className="me-auto">Notification</strong>
                                        <small>now</small>
                                   </Toast.Header>
                                   <Toast.Body>Message sent successfully</Toast.Body>
                              </Toast>
                         : ""} */}

                         <div className='text-center text-muted'>
                              &copy; {year}, All rights reserved.
                         </div>
                    </Container>
               </section>
          </>
     )
}

export default Contact