import React from 'react'
import AboutSectionItem from './AboutSectionItem'



function AboutSection() {
  return (
    <>
        <section className="about-section">
            <div className="common-wrap clear">
                <div className="about-inner flex-box">
                    <div className="about-section-thumb">
                        <img src="img/about/about-us.jpg" alt="" />
                    </div>
                    <div className="about-section-content">
                        <h3>About Us</h3>
                        <p>Webtricker Web Design &amp; Development Agency is a total solution of your website related requirements. From branding to web design and then web design to web development. And finally deploy to the hosting. We do everything as one stop service center.</p>
                        <div className="about-section-items">
                            <AboutSectionItem
                                itemTitle="Our mission"
                                itemdesc="Being professional in web development, mobile application, and digital marketing companies. Our mission is to provide customer-centric, result-oriented, cost-competitive innovative &amp; functional IT Solutions to our valuable global clients"
                            />
                            <AboutSectionItem
                                itemTitle="Our goals"
                                itemdesc="We are focused on providing your users the BEST experience they can have on your website. We love creating UNIQUE, ELEGANT and USABLE websites built on solid web standards."
                            />
                            <AboutSectionItem
                                itemTitle="Why us?"
                                itemdesc="One of the first things you should know about us is that we don’t do everything. But what we do, we do well. We always try to value our clients time and money. Let us prove it by involving us with you with any of the following services. We'd be happy to serve you with our maximum effort."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutSection