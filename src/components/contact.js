import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Map from "./map";

const Contact = () => {
     return (
          <>
               <Map />
               <section className="contact_container">
                    <Container>
                         <Row>
                              <Col md={4}>
                                   <div className="text-light">
                                        <h1>Get in touch</h1>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
          </>
     )
}

export default Contact