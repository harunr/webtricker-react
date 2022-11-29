import React from 'react'
import AboutSection from '../components/about/AboutSection'
import AboutTop from '../components/about/AboutTop'
import BestFeatures from '../components/about/BestFeatures'
import OurClient from '../components/about/OurClient'
import OurPilots from '../components/about/OurPilots'
import {Helmet} from "react-helmet";

function About() {
  return (
    <>
    <Helmet><title>Webtricker | About</title></Helmet>
    <section className="main-content-wrap">
        <AboutTop/>
        <BestFeatures/>
        <OurClient/>
        <OurPilots/>
        <AboutSection/>
    </section>
    </>
  )
}

export default About