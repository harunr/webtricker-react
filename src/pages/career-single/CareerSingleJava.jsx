import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSingleJava() {
  return (
    <>
    <Helmet><title>Webtricker | Java Developer</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/Java.jpg"
          CareerJobTitle="Java Developer "
          CareerJobDesc="Development • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>BS/MS degree in Computer Science, Engineering or a related subject</li>
              <li>Proven hands-on Software Development experience</li>
              <li>Proven working experience in Java development</li>
              <li>Hands on experience in designing and developing applications using Java EE platforms</li>
              <li>Object Oriented analysis and design using common design patterns.</li>
              <li>Profound insight of Java and JEE internals (Classloading, Memory Management, Transaction management etc)</li>
              <li>Excellent knowledge of Relational Databases, SQL and ORM technologies (JPA2, Hibernate)</li>
              <li>Experience in the Spring Framework</li>
              <li>Experience as a Sun Certified Java Developer</li>
              <li>Experience in developing web applications using at least one popular web framework (JSF, Wicket, GWT, Spring MVC)</li>
              <li>Experience with test-driven develo</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Contribute in all phases of the development lifecycle</li>
              <li>Write well designed, testable, efficient code</li>
              <li>Ensure designs are in compliance with specifications</li>
              <li>Prepare and produce releases of software components</li>
              <li>Support continuous improvement by investigating alternatives and technologies and presenting these for architectural review</li>
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

export default CareerSingleJava;