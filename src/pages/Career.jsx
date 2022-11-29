import React from 'react'
import CareerHero from '../components/career/CareerHero';
import Facilities from '../components/career/Facilities';
import Vacancy from '../components/career/Vacancy';
import {Helmet} from "react-helmet";
function Career() {
  return (
    <>
        <Helmet>
          
          <title>Webtricker | Career</title>
        
        </Helmet>
        <section className="main-content-wrap">
            <CareerHero/>
            <Vacancy/>
            <Facilities/>
        </section>
    </>
  )
}

export default Career;