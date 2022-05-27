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
                                        <Col md={data.colSystem} className="mt-3" key={index}>
                                             <div className={data.className}>
                                                  <div className={data.imageClass}>
                                                       <img src={data.img} alt={data.altText} className="w-100 h-100 d-block" />
                                                  </div>

                                                  <div className='details p-3'>
                                                       <h2 className='text-dark'>
                                                            {data.projectTitle}
                                                       </h2>

                                                       <p className='mt-3 text-muted'>
                                                            {data.detailedText}
                                                       </p>

                                                  </div>

                                                  <div className='border-top p-3 text-end'>
                                                       <button className='btn btn-outline-dark cta btn-lg'>
                                                            Learn more
                                                       </button>

                                                       <a className='text-decoration-none' href={data.path} target={"_blank"} rel="noreferrer">
                                                            <button className='btn ms-3 btn-outline-dark cta btn-lg'>
                                                                 View project
                                                            </button>
                                                       </a>
                                                  </div>
                                             </div>
                                        </Col>
                                   )
                              })}
                         </Row>

                         <div className='mt-4'>
                              <a className='text-decoration-none' href='https://github.com/Nathan-freelance-dev?tab=repositories' rel='noreferrer' target={'_blank'}>
                                   <CallToAction 
                                        text={"Visit my github repo"}
                                   />
                              </a>
                         </div>
                    </Container>
               </section>
          </>
     )
}

export default Projects;