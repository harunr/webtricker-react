import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSinglePython() {
  return (
    <>
    <Helmet><title>Webtricker | Python Developer</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/python.jpg"
          CareerJobTitle="Python Developer "
          CareerJobDesc="Development • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Expert in Python, with knowledge of at least one Python web framework (like Django, Flask or Pyramid)</li>
              <li>Knowledge of object-relational mapping (ORM)</li>
              <li>Able to integrate multiple data sources and databases into one system</li>
              <li>Understanding of the threading limitations of Python, and multi-process architecture</li>
              <li>Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3</li>
              <li>Knowledge of user authentication and authorization between multiple systems, servers, and environments</li>
              <li>Understanding of fundamental design principles behind a scalable application</li>
              <li>Familiarity with event-driven programming in Python</li>
              <li>Understanding of the differences between multiple delivery platforms, such as mobile vs desktop, and optimizing output to match the specific platform</li>
              <li>Able to create database schemas that represent and support business processes</li>
              <li>Strong unit test and debugging skills</li>
              <li>Proficient understanding of code versioning tools (such as Git, Mercurial or SVN)</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Write effective, scalable code</li>
              <li>Develop back-end components to improve responsiveness and overall performance</li>
              <li>Integrate user-facing elements into applications</li>
              <li>Test and debug programs</li>
              <li>Improve functionality of existing systems</li>
              <li>Implement security and data protection solutions</li>
              <li>Assess and prioritize feature requests</li>
              <li>Coordinate with internal teams to understand user requirements and provide technical solutions</li>
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
              <li>02</li>
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

export default CareerSinglePython