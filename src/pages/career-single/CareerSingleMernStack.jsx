import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSingleMernStack() {
  return (
    <>
    <Helmet><title>Webtricker | Mern Stack Developer</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/mern-stack.jpg"
          CareerJobTitle="Mern Stack Developer "
          CareerJobDesc="Development • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Proven experience as a Full Stack Developer or similar role</li>
              <li>Experience developing desktop and mobile applications</li>
              <li>Familiarity with common stacks</li>
              <li>Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</li>
              <li>Knowledge of multiple back-end languages (e.g. C#, Java, Python) and JavaScript frameworks (e.g. Angular, React, Node.js)</li>
              <li>Familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache) and UI/UX design</li>
              <li>Excellent communication and teamwork skills</li>
              <li>Great attention to detail</li>
              <li>Organizational skills</li>
              <li>An analytical mind</li>
              <li>Degree in Computer Science, Statistics or relevant field</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Work with development teams and product managers to ideate software solutions</li>
              <li>Design client-side and server-side architecture</li>
              <li>Build the front-end of applications through appealing visual design</li>
              <li>Develop and manage well-functioning databases and applications</li>
              <li>Write effective APIs</li>
              <li>Test software to ensure responsiveness and efficiency</li>
              <li>Troubleshoot, debug and upgrade software</li>
              <li>Create security and data protection settings</li>
              <li>Build features and applications with a mobile responsive design</li>
              <li>Write technical documentation</li>
              <li>Work with data scientists and analysts to improve software</li>
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

export default CareerSingleMernStack;