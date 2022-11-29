import React from 'react'
import { Helmet } from 'react-helmet';
import CouesesItem from '../components/courses/CouesesItem';
import CouesesItemData from '../components/courses/CouesesItemData';
import ServiceHero from '../components/service/ServiceHero';

const coursePath = (val) =>{
    return(
        <CouesesItem
        courseImage={val.courseImage}
        courseCaption={val.courseCaption}
        courseMonth={val.courseMonth}
        courseClasses={val.courseClasses}
        courseHours={val.courseHours}
        />
    )
}


function Courses() {
  return (
    <>
    <Helmet><title>Webtricker | Training</title></Helmet>
    <section className="main-content-wrap">
        <ServiceHero
            HeroSrc="img/courses/courses-hero.jpg"
            heroTitle="Our Courses"
        />
        <section className="courses-wrap">
            <div className="common-wrap clear">
                <h2>Our Courses</h2>
                <div className="courses-item-wrap">
                    {CouesesItemData.map(coursePath)}
                </div>
            </div>
        </section>

    </section>
    </>
  )
}

export default Courses;
