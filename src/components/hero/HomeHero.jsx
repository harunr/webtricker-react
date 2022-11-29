import React, { useEffect } from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'

const HomeHero =  () => {
    useEffect(function() {
        if($(window).width() < 768){
            $('.hero-inner div').removeClass('animate-from-bottom')
        }
    });
    return(
        <>
            <section className="hero-wrap">
                <div className="hero-shape">
                    <figure>
                        <img src="svgs/hero-shap.svg" alt="hero-shap"/>
                    </figure>
                </div>
                <div className="common-wrap clear">
                    <div className="hero-inner flex">
                        <div className="hero-content-wrap animate-from-bottom">
                            <h1><em>WE ARE WEBTRICKER. A</em> WEB DESIGN &amp; DEVELOPMENT <dfn>AGENCY.</dfn></h1>
                            <p className="lead">A small, effective &amp; creative solution, that can help you to grow your
                                business bigger.</p>
                            <div className="hero-btn">
                                <Link to="/service" className="btn button button--nina" data-text="Service">
                                    <span>S</span>
                                    <span>e</span>
                                    <span>r</span>
                                    <span>v</span>
                                    <span>i</span>
                                    <span>c</span>
                                    <span>e</span>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-thumb animate-from-bottom">
                            <object type="image/svg+xml" data="svgs/hero.svg">
                                <img src="svgs/hero.svg" alt=''/>
                            </object>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 

export default HomeHero;
