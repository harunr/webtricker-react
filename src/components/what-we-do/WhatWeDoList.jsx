import React from 'react';
import { Link } from 'react-router-dom';




const WhatWeDoList = () =>{
    return(
        <>
            <div className="what-we-do-list-wrap animate-from-bottom">
                <h2 className="middle-border">What We Do</h2>
                <div className="what-we-do-list flex">
                    <ul>
                        <li>Digital Marketing</li>
                        <li> UI UX Design</li>
                        <li> Social Media Marketing</li>
                        <li>Web Application</li>
                        <li>Domain &amp; Hosting</li>
                        <li>API Design</li>
                    </ul>
                    <ul>
                        <li>Training</li>
                        <li> Ecommerce</li>
                        <li> WordPress</li>
                        <li>Affiliate</li>
                        <li>SEO</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
                <div className="what-we-do-list-btn">
                    <Link to="/service" className="btn button button--nina" data-text="Read More">
                        <span>R</span>
                        <span>e</span>
                        <span>a</span>
                        <span>d</span>
                        <span>&nbsp;</span>
                        <span>M</span>
                        <span>o</span>
                        <span>r</span>
                        <span>e</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WhatWeDoList;