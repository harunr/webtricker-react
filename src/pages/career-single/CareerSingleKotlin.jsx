import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSingleKotlin() {
  return (
    <>
    <Helmet><title>Webtricker | Kotlin Developer</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/kotlin.jpg"
          CareerJobTitle="Kotlin Developer "
          CareerJobDesc="Development • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Relevant experience developing Android apps</li>
              <li>Knowledge of the Java and Kotlin programming languages is required to develop clear, legible, and maintainable code</li>
              <li>Knowledge of the Android SDK and Android Studio</li>
              <li>Practical knowledge of mobile app architecture, flow, design, implementation, and release</li>
              <li>Familiarity with agile development techniques and CI/CD pipelines</li>
              <li>Extensive experience developing end-to-end Android mobile apps, including design, development, and deployment to app marketplaces</li>
              <li>Thorough awareness of the app lifecycle, architectural concepts, and design elements</li>
              <li>A problem-solving attitude, analytic talents, and excellent technical and communication skills</li>
              <li>Strong debugging abilities and understanding of quality assurance techniques</li>
              <li>Familiarity with RESTful APIs and XML is required to link the app to backend services</li>
              <li>Understanding the most recent mobile app trends, designs, and upcoming technologies</li>
              <li>Understanding of state management to facilitate user engagement</li>
              <li>Understanding of Agile and DevOps techniques</li>
              <li>Knowledge of version control systems and tools, such as GitHub</li>
              <li>Excellent interpersonal and verbal and written communication abilities</li>
              <li>Excellent time management abilities and the ability to work autonomously</li>
              <li>A critical thinker, analyst, and interested professional who wants to create outstanding Android products</li>
            </ul>


  

          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Create contemporary, safe, and feature-rich Android applications from the ground up with Kotlin</li>
              <li>Comprehend requirements and convert drawings and wireframes into code</li>
              <li>Find and repair issues to increase performance</li>
              <li>Work with the design and testing teams to produce high-performance apps</li>
              <li>Work with APIs and data sources per the requirements</li>
              <li>Assist in the upkeep of code quality, reusability, and continual code evaluation</li>
              <li>Investigate and apply new technologies to enhance the developer experience</li>
              <li>Code unit testing to guarantee bug-free, dependable, and optimal user experience</li>
              <li>Work with team members to design, develop, and launch new features</li>
              <li>Put in place security procedures that are consistent with overall security goals</li>
              <li>Using Kotlin, plan, create, construct, and deliver an end-to-end Android mobile app</li>
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

export default CareerSingleKotlin;