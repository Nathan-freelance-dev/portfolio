import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { serviceDataObj } from "../data/serviceData";

const Services = () => {
     return (
          <>
               <section className="service_container" id="services">
                    <Container>
                         <Row>
                              {serviceDataObj.map((data, index) => {
                                   return (
                                        <Col md={data.colSystem} key={index}>
                                             <div className="p-4 border text-dark">
                                                  <h1>
                                                       {data.icon}
                                                  </h1>

                                                  <h2 className="fw-light">
                                                       {data.title}
                                                  </h2>

                                                  <p className="mt-3 text-muted">
                                                       {data.detail}
                                                  </p>
                                             </div>
                                        </Col>
                                   )
                              })}
                         </Row>
                    </Container>
               </section>
          </>
     )
}

export default Services;