import React from 'react'
import Hero from '../../components/hero/hero';
import RecentProjects from '../../components/rectent_projects/recentProjects';
import Footer from '../../components/footer/footer';

const Home = () => {
    return (
        <>
            <Hero />
            <RecentProjects />
            <Footer />
        </>
    )
}

export default Home;