import React from 'react'
import OurPilotsThumb from './OurPilotsThumb'

function OurPilots() {
  return (
    <>
        <section className="our-pilots-wrap">
            <div className="common-wrap clear">
                <div className="our-pilots-inner">
                    <div className="our-pilots-content">
                        <h5>OUR CEO &amp; SENIORS</h5>
                        <h2>We help to make your website creative</h2>
                        <p>We are webtricker team. We create top ranking websites, UI/UX designs and remarkable brands. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolores amet ipsa animi beatae dolor labore natus, hic accusantium, tenetur soluta nisi tempora quae laboriosam voluptate tempore repellat voluptatem inventore id, facere assumenda aut! Dolor beatae laudantium at facilis, quos.</p>
                    </div>
                    <div className="our-pilots-thumbs">
                        <OurPilotsThumb
                            pilotsImage="img/team/ceo.jpg"
                            pilotsDeg="CEO &amp; FOUNDER"
                            pilotsName="Mosharaf Hossain"
                        />
                        <OurPilotsThumb
                            pilotsImage="img/about/tofael.png"
                            pilotsDeg="Manager"
                            pilotsName="Tofael Ahmed"
                        />
                        <OurPilotsThumb
                            pilotsImage="img/about/naiem.png"
                            pilotsDeg="Team Lead (Front-End)"
                            pilotsName="Muhammad Naiem"
                        />
                        <OurPilotsThumb
                            pilotsImage="img/about/khayer.png"
                            pilotsDeg="HR Executive"
                            pilotsName="Md. Monjoor Kahyer"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurPilots