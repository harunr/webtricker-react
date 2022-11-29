import React from 'react'
import BestFeaturesItem from './BestFeaturesItem'

function BestFeatures() {
  return (
    <>
        <section className="bestfeatures-wrap">
            <div className="common-wrap clear">
                <div className="bestfeatures-intro">
                    <h4>BEST FEATURES</h4>
                    <h2>We can give you creative work with best practice</h2>
                </div>
                <div className="bestfeatures-item-wrap">
                    <BestFeaturesItem
                        bestfeaturesImage="svgs/about/Graphic-Design.svg"
                        bestfeaturesTitle="Graphic Design"
                        bestfeaturesDesc="We design any kind of graphic design related works . Where many are doing copy paste. We are unique with unique ideas. So, just let us know about your business and you will get ready everything related your branding within very short time!"
                    />
                    <BestFeaturesItem
                        bestfeaturesImage="svgs/about/Web-Development.svg"
                        bestfeaturesTitle="Web Development"
                        bestfeaturesDesc="We develop and code different design to promote our clients Brand, e-commerce, official site, marketing templates etc. We always do pixel perfect coding and high end PSD to HTML or PSD to Responsive Development."
                    />
                    <BestFeaturesItem
                        bestfeaturesImage="svgs/about/Social-Media-Marketing.svg"
                        bestfeaturesTitle="Social Media Marketing"
                        bestfeaturesDesc="We work on social media marketing site, like- Facebook, Linkedin, Twitter, YouTube, Instagram and Pinterest. We can do all work digitally. Want to change your SMM site properly and digitally then let us do something for you."
                    />
                    <BestFeaturesItem
                        bestfeaturesImage="svgs/about/Domain-Hosting.svg"
                        bestfeaturesTitle="Domain &amp; Hosting"
                        bestfeaturesDesc="This is an important part of a business website. We are here to help you to purchase your domain and hosting. And we can set up those for you. We can provide low and cheap pricing domain hosting for you too. Just contact us about it for more details."
                    />
                </div>
            </div>
        </section>
    </>
  )
}

export default BestFeatures