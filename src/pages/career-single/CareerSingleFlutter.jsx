import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';
function CareerSingleFlutter() {
  return (
    <>
    <Helmet><title>Webtricker | Flutter Developer</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/flutter.jpg"
          CareerJobTitle="Flutter Developer "
          CareerJobDesc="Development • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Experience in development of Android/iOS applications and have deployed them on Google Play/App Store.</li>
              <li>3+ years knowledge in mobile app development.</li>
              <li>In depth understanding of front end languages like HTML, CSS3 and JavaScript.</li>
              <li>In depth understanding of Object Oriented programming languages like Java and C++.</li>
              <li>Familiarity using version control tools like Git, Subversion etc. and IDEs like Android Studio, VS Code etc.</li>
              <li>Understanding of the Agile Software Development Life Cycle and been exposed to Scrum projects.</li>
              <li>Knowledge of Dart programming language, Rest APIs and integration of various APIs from third parties.</li>
              <li>Comfortable using test cases for debugging code, enhancing performance and reliability.</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>You will be building and shipping robust apps to Android/ iOS devices using a single codebase.</li>
              <li>You will be writing readable and clear code using Dart that will be extensively documented for future use and upgrades.</li>
              <li>You will be sharing feedback and brainstorming ideas with teams to improve the development process.</li>
              <li>Understand basic concepts of design for developing user friendly applications.</li>
              <li>Stay up to date with the latest technologies.</li>
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

export default CareerSingleFlutter;