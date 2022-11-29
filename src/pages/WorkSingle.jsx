import React from 'react';
import Hero from '../components/hero/Hero';
import OurWorks from '../components/our-works/OurWorks';
import WorkOverview from '../components/work-single/WorkOverview';
import WorkSinglePoster from '../components/work-single/WorkSinglePoster';

function WorkSingle() {
    

    return (
        <>
            <Hero 
                heroImage="img/hero.png"
                heroTitle="Design for Australia Safari"
                heroDesc="A travel agency Website"
            />
            <WorkOverview
                websiteThumbnail="img/worksSingle/thumbnail.webp"
                websiteDesc="Especially for the Travel Agency, we have developed a unique advertising campaign. The task was not an easy one, but we did a great job."
                clientName="vector"
                siteCategories="Travel Agency"
                startDate="Dec 17 2021"
                finishDate="Feb 02 2022"
                websiteLink="www.example.com"
            />
            <WorkSinglePoster/>
            <OurWorks
                OurWorksIntroTitle="Related Works"
            />
        </>
    )
}

export default WorkSingle;