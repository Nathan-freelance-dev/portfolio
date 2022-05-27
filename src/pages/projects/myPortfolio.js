import React from 'react'
import { Container } from 'react-bootstrap';
import myPortfolio from '../../assets/images/my_portfolio.jpg'

const MyPortfolio = () => {
     return (
          <>
               <Container className='pt-5'>
                    <div className='project_image'>
                         <img src={myPortfolio} alt="Portfolio" className='d-block w-100 h-100' />
                    </div>
               </Container>
          </>
     )
} 

export default MyPortfolio;