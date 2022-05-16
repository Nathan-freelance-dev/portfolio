import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as fiIcons from 'react-icons/fi'
import * as bsIcons from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='text-light'>
                                <div className='text-primary navbar-brand'>
                                    Nathan
                                    <div className='text-muted small'>Freelnce frontend developer</div>
                                </div>

                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='d-flex'>
                                <div className='text-light text-container'>
                                    <h2>Follow me</h2>
                                </div>

                                <div className='text-primary text-end w-100'>
                                    <a href='#' className='text-decoration-none text-primary'>
                                        <fiIcons.FiTwitter />
                                    </a>

                                    <a href='#' className='text-decoration-none text-primary'>
                                        <fiIcons.FiGithub />
                                    </a>

                                    <a href='#' className='text-decoration-none text-primary'>
                                        <bsIcons.BsWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className='mt-4 text-center text-muted'>
                        &copy; 2022, Created with love by me.
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;