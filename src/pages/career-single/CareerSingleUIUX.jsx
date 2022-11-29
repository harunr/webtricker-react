import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSingleUIUX() {
  return (
    <>
    <Helmet><title>Webtricker | UI/UX</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/UIUX.jpg"
          CareerJobTitle="Excellent UI / UX Designer"
          CareerJobDesc="Designer • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Proven work experience as a UI/UX Designer or similar role</li>
              <li>Portfolio of design projects</li>
              <li>Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)</li>
              <li>Up-to-date knowledge of design software like Adobe Illustrator and Photoshop</li>
              <li>Team spirit; strong communication skills to collaborate with various stakeholders</li>
              <li>Good time-management skills</li>
              <li>BSc in Design, Computer Science or relevant field</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Gather and evaluate user requirements in collaboration with product managers and engineers</li>
              <li>Illustrate design ideas using storyboards, process flows and sitemaps</li>
              <li>Design graphic user interface elements, like menus, tabs and widgets</li>
              <li>Build page navigation buttons and search fields</li>
              <li>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</li>
              <li>Create original graphic designs (e.g. images, sketches and tables)</li>
              <li>Prepare and present rough drafts to internal teams and key stakeholders</li>
              <li>Identify and troubleshoot UX problems (e.g. responsiveness)</li>
              <li>Conduct layout adjustments based on user feedback</li>
              <li>Adhere to style standards on fonts, colors and images</li>
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

export default CareerSingleUIUX;