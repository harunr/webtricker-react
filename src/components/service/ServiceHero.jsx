import React from 'react'

function ServiceHero(props) {
  return (
    <>
        <section className="service-hero-wrap">
            <figure>
                <img src={props.HeroSrc} alt="hero" />
            </figure>
            <div className="hero-content">
                <h1>{props.heroTitle}</h1>
            </div>
        </section>
    </>
  )
}

export default ServiceHero