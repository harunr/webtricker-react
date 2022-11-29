import React from 'react'

function BlogHero() {
  return (
    <>
    <section className="hero-wrap blog-hero">
        <div className="hero-bg">
            <figure>
                <img src="img/blog/hero-bg.jpg" alt="hero-bg"/>
            </figure>
        </div>
        <div className="common-wrap clear">
            <div className="hero-inner flex">
                <div className="hero-content-wrap animate-from-bottom">
                    <h1><em>WE ARE WEBTRICKER. A</em> WEB DESIGN &amp; DEVELOPMENT <dfn>AGENCY.</dfn></h1>
                    <p className="lead">A small, effective &amp; creative solution, that can help you to grow your business bigger.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogHero