import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSingleWPPlugin() {
  return (
    <>
    <Helmet><title>Webtricker | Wordpress Plugin Developer</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/WPPlugin.jpg"
          CareerJobTitle="Wordpress Plugin developer"
          CareerJobDesc="Developer • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Good understanding of front-end technologies, including HTML5, CSS3, JavaScript, jQuery</li>
              <li>Experience building user interfaces for websites and/or web applications</li>
              <li>Experience designing and developing responsive design websites</li>
              <li>Comfortable working with debugging tools like Firebug, Chrome inspector, etc.</li>
              <li>Ability to understand CSS changes and their ramifications to ensure consistent style across platforms and browsers</li>
              <li>Ability to convert comprehensive layout and wireframes into working HTML pages</li>
              <li>Knowledge of how to interact with RESTful APIs and formats (JSON, XML)</li>
              <li>Proficient understanding of code versioning tools (such as Git, SVN, and Mercurial)</li>
              <li>Strong understanding of PHP back-end development</li>
              <li>Must be proficient in spoken and written English.</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Designing and implementing new features and functionality</li>
              <li>Establishing and guiding the website’s architecture</li>
              <li>Ensuring high-performance and availability, and managing all technical aspects of the CMS</li>
              <li>Helping formulate an effective, responsive design and turning it into a working theme and plugin.</li>
              <li>Collaborating with other team members &amp; support whenever required.</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="Job Experience">
            <ul>
              <li>Minimum of One(2) year.</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="Education">
            <ul>
              <li>Specific skill is the highest priority for this position. Any Educational Background can be considered.</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="EMPLOYMENT STATUS">
            <ul>
              <li>Full-time</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="VACANCY">
            <ul>
              <li>03</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="COMPENSATION &amp; OTHER BENEFITS">
            <ul>
              <li>As per company policy</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="SALARY">
            <ul>
              <li>Negotiable</li>
            </ul>
          </CareerItem>
        </CareerItemWrap>
        <JobSubmit/>
    </section>
        
    </>
  )
}

export default CareerSingleWPPlugin;