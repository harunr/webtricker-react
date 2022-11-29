import React from 'react'
import ServiceHero from '../components/service/ServiceHero';
import WhatWeOffer from '../components/service/WhatWeOffer';
import {Helmet} from "react-helmet";

function Service() {
  return (
    <>
        <Helmet><title>Webtricker | Portfolios</title></Helmet>
        <section className="main-content-wrap">
            <ServiceHero
            HeroSrc="img/service/service-hero.jpg"
            heroTitle="Our Services"
            />
            <WhatWeOffer/>
        </section>
    </>
  )
}

export default Service;