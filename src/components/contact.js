import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus, sendForm } from 'emailjs-com';
import { Col, Container, Row, Button, Toast } from "react-bootstrap";
import Map from "./map";
import * as fiIcons from 'react-icons/fi'
import * as bsIcons from 'react-icons/bs'

const Contact = () => {
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_4ga8ugv', 'template_d29k7ur', form.current, '0l8rCYMY6l7VfEi2u')
               .then((result) => {
                    console.log(result);

                    let worked = true
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
                                             <a href="https://twitter.com/bigNath0128" target={'_blank'} className='text-decoration-none btn btn-socials'>
                                                  <fiIcons.FiTwitter />
                                             </a>

                                             <a className="text-decoration-none btn btn-socials" href="https://github.com/Nathan-freelance-dev" target={'_blank'}>
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
                                             <input type="submit" value="Send message" className='btn btn-outline-light' />
                                        </div>
                                   </form>
                              </Col>
                         </Row>

                         <a className="text-decoration-none" href="#">
                              <Button variant="outline-light position-absolute bottom-0 end-0 me-3 mb-3">
                                   <bsIcons.BsArrowUp />
                              </Button>
                         </a>

                         {/* toast message bug not fixed */}

                         <Toast show={showA} onClose={toggleShowA}>
                              <Toast.Header>
                                   <bsIcons.BsBell className='me-2' /> 
                                   <strong className="me-auto">Notification</strong>
                                   <small>now</small>
                              </Toast.Header>
                              <Toast.Body>Message sent successfully</Toast.Body>
                         </Toast>
                    </Container>
               </section>
          </>
     )
}

export default Contact