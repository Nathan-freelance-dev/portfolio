import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { myProjectsData } from '../data/projectsData';
import CallToAction from './callToAction/callToAction'

const Projects = () => {
     return (
          <>
               <section className='projects_container' id='projects'>
                    <Container>
                         <h1 className='text-dark text-uppercase'>Some of my completed projects.</h1>

                         <Row className='mt-3'>
                              {myProjectsData.map((data, index) => {
                                   return (
                                        <Col md={data.colSystem} key={index}>
                                             <div className={data.className}>
                                                  <div className='details'>
                                                       <h2 className='text-light bg-dark p-2'>
                                                            {data.projectTitle}
                                                       </h2>

                                                       <div className='text-light bg-dark p-2'>
                                                            {data.tools}
                                                       </div>
                                                  </div>
                                             </div>
                                        </Col>
                                   )
                              })}
                         </Row>

                         <div className='mt-4'>
                              <CallToAction 
                                   text={"See more projects"}
                              />
                         </div>
                    </Container>
               </section>
          </>
     )
}

export default Projects;