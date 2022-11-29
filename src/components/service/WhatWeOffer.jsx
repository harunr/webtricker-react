import React from 'react'
import WhatWeOfferItem from './WhatWeOfferItem'
import WhatWeOfferItemWrap from './WhatWeOfferItemWrap'

function WhatWeOffer() {
  return (
    <>
        <section className="what-we-offer-wrap">
            <div className="common-wrap clear">
                <div className="our-offer-title">
                    <h2>What we offer</h2>
                    <p>One of the first things you should know about us is that we don’t do everything. But what we do, we do well. We always try to value our clients time and money. Let us prove it by involving us with you with any of the following services. We’d be happy to serve you with our maximum effort.</p>
                </div>
                <WhatWeOfferItemWrap>
                    <WhatWeOfferItem
                        imageSrc="img/service/ui-ux-design.jpg"
                        itemHeading="Ui Ux Design"
                        itemDesc="UI &amp; UX design is a very important part of your business. We always try to think out of the box and try to make the creative ideas to bring life! We have a great team of expert for taking care of your UI &amp; UX requirements."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/graphics-design.jpg"
                        itemHeading="Graphic Design"
                        itemDesc="We design any kind of graphic design related works . Where many are doing copy paste. We are unique with unique ideas. So, just let us know about your business and you will get ready everything related your branding within very short time!"
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/seo.jpg"
                        itemHeading="SEO"
                        itemDesc="SEO is another important part of any website nowadays. Site indexing, loading speed, page ranking etc always playing important role to move up your website and business. So, we do SEO friendly web development for you."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/web-development.jpg"
                        itemHeading="Web Development"
                        itemDesc="We develop and code different design to promote our clients Brand, e-commerce, official site, marketing templates etc. We always do pixel perfect coding and high end PSD to HTML or PSD to Responsive Development."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/parallax-effect.jpg"
                        itemHeading="Parallax Effect"
                        itemDesc="Parallax effect is a modern attribute of web development which makes website looks more attractive. We are capable of dealing any kind of complex parallax effect. We can do other animations too. Just look at our portfolio items to check the cool animations &amp; functionalities!"
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/wordpress.jpg"
                        itemHeading="WordPress"
                        itemDesc="WordPress is our main area of expertise. We can do any kind of WordPress requirements. We can support on any custom WP development With ACF &amp; Redux. Can do any theme development like Elementor pro and other popular themes and builders."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/affiliate.jpg"
                        itemHeading="Affiliate"
                        itemDesc="If you want to the partnership with world biggest commercial sites like- Amazon, AliExpress, eBay, Walmart etc and also want to develop your business on other topics related to affiliate marketing then we can help you to provide great ideas &amp; assistance to grow your business."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/woo-commerce.jpg"
                        itemHeading="Woo-commerce"
                        itemDesc="Build a front page for your Woocommerce store in minutes. Order us your Woocommerce need today. We will set things up for you within a very short turn around time. We can set up your payment get way and cart with custom style 🙂"
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/e-commarce.jpg"
                        itemHeading="Ecommerce"
                        itemDesc="We know how important an E-commerce site for a owner is. We can assist you in every way from design to development and set up the server. We can do both normal Ecommerce with members plugin and multivendor. Let us handle your project for you."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/training.jpg"
                        itemHeading="Training"
                        itemDesc="We have a strong training cell. We always keen to learn new things everyday. We are giving some opportunities for the fresher who deeply wants to learn something different and dedicated to learn. Reserve a seat now to be a part of challenging and attractive careers!"
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/api-design.jpg"
                        itemHeading="Api Design"
                        itemDesc="Creating secure and robust REST api for your company is a joy with us. By leveraging OAuth2 protocol we will make your api great. Just consider us as a back office for you and we will be with you until the final output you’re happy with."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/domain-hosting.jpg"
                        itemHeading="Domain &amp; Hosting"
                        itemDesc="This is an important part of a business website. We are here to help you to purchase your domain and hosting. And we can set up those for you. We can provide low and cheap pricing domain hosting for you too. Just contact us about it for more details."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/web-application.jpg"
                        itemHeading="Web Application"
                        itemDesc="Whether it’s in React, Node or PHP , we can create customized and functional single page application according to your requirements. Let us know your ideas and we will blend our creativity and efforts to make it happen!"
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/SMM.jpg"
                        itemHeading="Social Media Marketing"
                        itemDesc="We work on social media marketing site, like- Facebook, Linkedin, Twitter, YouTube, Instagram and Pinterest. We can do all work digitally. Want to change your SMM site properly and digitally then let us do something for you."
                    />
                    <WhatWeOfferItem
                        imageSrc="img/service/digital-marketing.jpg"
                        itemHeading="Digital Marketing"
                        itemDesc="We help companies and individuals who want to improve their digital marketing capability. Our works is unique, which will be increasing your profit. Definitely, our service will attract you for the next time."
                    />
                </WhatWeOfferItemWrap>
            </div>
        </section>
    </>
  )
}

export default WhatWeOffer