import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSingleContentWriter() {
  return (
    <>
    <Helmet><title>Webtricker | Content Writer</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/ContentWriter.jpg"
          CareerJobTitle="Content Writer"
          CareerJobDesc="Writer • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Proven work experience as a Content Writer, Copywriter or similar role</li>
              <li>Portfolio of published articles</li>
              <li>Experience doing research using multiple sources</li>
              <li>Familiarity with web publications</li>
              <li>Excellent writing and editing skills in English</li>
              <li>Hands-on experience with Content Management Systems (e.g. WordPress)</li>
              <li>Ability to meet deadlines</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Research industry-related topics (combining online sources, interviews and studies)</li>
              <li>Write clear marketing copy to promote our products/services</li>
              <li>Prepare well-structured drafts using Content Management Systems</li>
              <li>Proofread and edit blog posts before publication</li>
              <li>Submit work to editors for input and approval</li>
              <li>Coordinate with marketing and design teams to illustrate articles</li>
              <li>Conduct simple keyword research and use SEO guidelines to increase web traffic</li>
              <li>Promote content on social media</li>
              <li>Identify customers’ needs and gaps in our content and recommend new topics</li>
              <li>Ensure all-around consistency (style, fonts, images and tone)</li>
              <li>Update website content as needed</li>
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

export default CareerSingleContentWriter;