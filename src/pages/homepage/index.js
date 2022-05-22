import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Hero from '../../components/hero'
import './homepage.scss'
import Services from '../../components/service'
import Projects from '../../components/projects'
import Blog from '../../components/blog'
import Contact from '../../components/contact'

const Homepage = () => {
     return (
          <>
               <Sidebar />
               <Hero />
               <Services />
               <Projects />
               <Blog />
               <Contact />
          </>
     )
}

export default Homepage