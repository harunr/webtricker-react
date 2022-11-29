import React from 'react'

function CareerSingleHero(props) {
  return (
    <>
        <section className="career-single-hero">
            <figure>
                <img src={props.CareerHeroSrc} alt="" />
            </figure>
            <div className="career-single-hero-content">
                <h1>{props.CareerJobTitle}</h1>
                <span>{props.CareerJobDesc}</span>
            </div>
        </section>
    </>
  )
}

export default CareerSingleHero