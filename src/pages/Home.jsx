import React from 'react';
import HomeHero from '../components/hero/HomeHero';
import WhatWeDo from '../components/what-we-do/WhatWeDo';
import SkillWrap from '../components/skills/SkillWrap';
import OurWorks from '../components/our-works/OurWorks';
import OurTeam from '../components/our-team/OurTeam';
import ClientReview from '../components/client-review/ClientReview';
import Development from '../components/development/Development';
import ContactWrap from '../components/contact-wrap/ContactWrap';
import {Helmet} from "react-helmet";

const Home = () => (
    <>
    <Helmet><title>Webtricker | Home</title></Helmet>
    <section className="main-content-wrap">
        <HomeHero/>
        <WhatWeDo/>
        <SkillWrap/>
        <OurWorks 
            OurWorksIntroTitle="Our Works"
        />
        <OurTeam/>
        <ClientReview/>
        <Development/>
        <ContactWrap/>
    </section>
    </>
)

export default Home;