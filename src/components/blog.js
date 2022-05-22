import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { myBlogData } from '../data/blogData'

const Blog = ()=> {
     return (
          <>
               <section className='blog_container' id='blog'>
                    <Container>
                         <Row>
                              {myBlogData.map((data, index) => {
                                   return (
                                        <Col md={data.colUnit} key={index}>
                                             <div className={data.className}>
                                                  
                                             </div>

                                             <div className='mt-3'>
                                                  <h3 className='text-dark fw-normal'>
                                                       {data.title}
                                                  </h3>

                                                  <p className='mt-3 text-muted fw-normal'>
                                                       {data.highlightText}
                                                  </p>

                                                  <Link className="text-muted" to={data.path}>
                                                       Read more
                                                  </Link>
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

export default Blog