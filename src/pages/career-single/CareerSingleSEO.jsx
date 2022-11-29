import React from 'react'
import CareerItem from '../../components/career-single-comp/CareerItem'
import CareerItemWrap from '../../components/career-single-comp/CareerItemWrap'
import CareerSingleHero from '../../components/career-single-comp/CareerSingleHero'
import {Helmet} from "react-helmet";
import JobSubmit from '../../components/career-single-comp/JobSubmit';

function CareerSingleSEO() {
  return (
    <>
    <Helmet><title>Webtricker | SEO</title></Helmet>
    <section className="main-content-wrap">
      <CareerSingleHero
          CareerHeroSrc="img/career-single/SEO.jpg"
          CareerJobTitle="SEO Expert "
          CareerJobDesc="Search Engine • Remote/In-house • Fulltime"
        />
        <CareerItemWrap>
          <CareerItem CareerItemHeading="Location">
            <span>Job Location : Jamalpur</span>
          </CareerItem>
          <CareerItem CareerItemHeading="QUALIFICATION">
            <ul>
              <li>Proven SEO experience</li>
              <li>Proven SEM experience managing PPC campaigns across Google, Yahoo and Bing.</li>
              <li>Solid understanding of performance marketing, conversion, and online customer acquisition</li>
              <li>In-depth experience with website analytics tools (e.g, Google Analytics, NetInsight, Omniture, WebTrends)</li>
              <li>Experience with bid management tools (e.g., Click Equations, Marin, Kenshoo, Search Ignite)</li>
              <li>Experience with A/B and multivariate experiments</li>
              <li>Working knowledge of HTML, CSS, and JavaScript development and constraints</li>
              <li>Knowledge of ranking factors and search engine algorithms</li>
              <li>Up-to-date with the latest trends and best practices in SEO and SEM</li>
              <li>BS/MS degree in a quantitative, test-driven field</li>
            </ul>
          </CareerItem>
          <CareerItem CareerItemHeading="ESSENTIAL DUTIES AND RESPONSIBILITIES">
            <ul>
              <li>Execute tests, collect and analyze data and results, identify trends and insights in order to achieve maximum ROI in paid search campaigns</li>
              <li>Track, report, and analyze website analytics and PPC initiatives and campaigns</li>
              <li>Manage campaign expenses, staying on budget, estimating monthly costs and reconciling discrepancies.</li>
              <li>Optimize copy and landing pages for search engine marketing</li>
              <li>Perform ongoing keyword discovery, expansion and optimization</li>
              <li>Research and implement search engine optimization recommendations</li>
              <li>Research and analyze competitor advertising links</li>
              <li>Develop and implement link building strategy</li>
              <li>Work with the development team to ensure SEO best practices are properly implemented on newly developed code</li>
              <li>Work with editorial and marketing teams to drive SEO in content creation and content programming</li>
              <li>Recommend changes to website architecture, content, linking and other factors to improve SEO positions for target keywords.</li>
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

export default CareerSingleSEO;