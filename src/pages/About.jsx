import React from 'react'
import AboutSection from '../components/about/AboutSection'
import AboutTop from '../components/about/AboutTop'
import BestFeatures from '../components/about/BestFeatures'
import OurClient from '../components/about/OurClient'
import OurPilots from '../components/about/OurPilots'
import {Helmet} from "react-helmet";
import ServiceHero from '../components/service/ServiceHero'

function About() {
  return (
    <>
    <Helmet><title>Webtricker | About</title></Helmet>
    <section className="main-content-wrap">
          <ServiceHero
            HeroSrc="img/about/about-hero.jpg"
            heroTitle="About Us"
          />
        {/* <AboutTop/> */}
        <BestFeatures/>
        <OurClient/>
        <OurPilots/>
        <AboutSection/>
    </section>
    </>
  )
}

export default About