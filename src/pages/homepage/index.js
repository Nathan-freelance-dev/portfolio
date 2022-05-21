import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Hero from '../../components/hero'
import './homepage.scss'
import Services from '../../components/service'

const Homepage = () => {
     return (
          <>
               <Sidebar />
               <Hero />
               <Services />
          </>
     )
}

export default Homepage