import React from 'react'
import { Link } from 'react-router-dom';

function ContactHero() {
  return (
    <>
        <section class="hero-wrap">
                <div class="hero-shape">
                    <figure>
                        <img src="svgs/hero-shap.svg" alt="hero-shap"/>
                    </figure>
                </div>
                <div class="common-wrap clear">
                    <div class="hero-inner flex">
                        <div class="hero-content-wrap animate-from-bottom">
                            <h1><em>HAVE A </em> QUESTION?</h1>
                            <p class="lead">We'd love to hear from you. We’ll give you something innovative, something different. We are here to assist you with an efficient team all the way from starting to the end and even after!</p>
                            <div class="hero-btn">
                                <Link to="/" className="btn button button--nina" data-text="BACK TO HOME">
                                    <span>B</span>
                                    <span>A</span>
                                    <span>C</span>
                                    <span>K</span>
                                    <span>&nbsp;</span>
                                    <span>T</span>
                                    <span>O </span>
                                    <span>&nbsp;</span>
                                    <span>H</span>
                                    <span>O</span>
                                    <span>M</span>
                                    <span>E</span>
                                </Link>
                            </div>
                        </div>
                        <div class="hero-thumb animate-from-bottom">
                            <figure>
                                <img src="svgs/contact/bundle.svg" alt="Developer-activity-pana"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default ContactHero