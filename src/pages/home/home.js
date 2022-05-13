import React from 'react'
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <section className='home'>
                <Container>
                    <div className='home_text'>
                        <h5 className='text-light fw-bold'>I'm Nathaniel Joseph.</h5>
                        
                        <div className='mt-4 typewriter text-light'>
                            <h1 className='fw-bold'>I'm a Frontend Developer.</h1>
                        </div>
                        <h1 className='fw-bold text-light'>I create websites and Applications</h1>
                        <h1 className='fw-bold text-light'>Based in Nigeria</h1>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home;