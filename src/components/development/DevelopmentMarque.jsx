import React from 'react';
import MarqueeItem from './MarqueeItem';

 function DevelopmentMarque(props) {
    
    return (
        <>
            <div className="marquee-slider-wrap marquee-slider-to-right animate-from-bottom">
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/html-svgrepo-com.svg"
                    expertiseTitle="Html5"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/css-svgrepo-com.svg"
                    expertiseTitle="Css3"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/sass-svgrepo-com.svg"
                    expertiseTitle="SASS/SCSS"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/bootstrap-svgrepo-com.svg"
                    expertiseTitle="Bootstrap"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/tailwindcss-icon-svgrepo-com.svg"
                    expertiseTitle="Tailwind Css"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/bulma-svgrepo-com.svg"
                    expertiseTitle="Bulma"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/js-svgrepo-com.svg"
                    expertiseTitle="Javascript"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/jquery-svgrepo-com.svg"
                    MarqueThumbAlt="marquee-slider-item"
                    expertiseTitle="JQuery"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/react-svgrepo-com.svg"
                    expertiseTitle="React"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/wordpress-svgrepo-com.svg"
                    expertiseTitle="Wordpress"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/laravel-svgrepo-com.svg"
                    expertiseTitle="Laravel"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/shopify-svgrepo-com.svg"
                    expertiseTitle="Shopify"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/svgator-svgrepo-com.svg"
                    expertiseTitle="SVGator"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/after-effects-cc-logo-svgrepo-com.svg"
                    expertiseTitle="After Effect"
                />
                <MarqueeItem
                    MarqueThumb="svgs/our-expertise/ux.png"
                    expertiseTitle="UI/UX"
                />
                <MarqueeItem
                    MarqueThumb="img/expertise/gsap-greensock.svg"
                    expertiseTitle="GSAP"
                />
                <MarqueeItem
                    MarqueThumb="img/expertise/python.png"
                    expertiseTitle="python"
                />
                <MarqueeItem
                    MarqueThumb="img/expertise/kotlin.svg"
                    expertiseTitle="Kotlin"
                />
                <MarqueeItem
                    MarqueThumb="img/expertise/apps.png"
                    expertiseTitle="Apps Development"
                />
                <MarqueeItem
                    MarqueThumb="img/expertise/logo-design.png"
                    expertiseTitle="Logo Design"
                />
                
            </div>
        </>
    )
}

export default DevelopmentMarque