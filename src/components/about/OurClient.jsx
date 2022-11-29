import React from 'react'
import OurClientSlider from './OurClientSlider'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function OurClient() {
  return (
    <>
        <section className="our-client-wrap">
            <div className="client-back-bg">
                <figure>
                    <img src="img/about/banner.png" alt="" />
                </figure>
            </div>
            <div className="common-wrap clear">
                <div className="our-client-inner">
                    <div className="rotate-text">
                        <div>
                            <img src="svgs/about/clarity_cursor-hand-click-line.svg" alt="" />
                            <em>Our portfolio</em>
                        </div>
                    </div>
                    <div className="client-main-wrap">
                        <div className="client-main-content">
                            <h4>Our Clients</h4>
                            <h2>What Client’s Say?</h2>
                        </div>
                        <div className="client-slider-wrap">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                autoplay={{
                                    delay: 100,
                                    disableOnInteraction: false,
                                  }}
                                >
                                <SwiperSlide>
                                    <OurClientSlider
                                    clientReview="Mosharaf is a pleasure to work with. He and his team do excellent work and are very knowledgeable and talented. They are also always very resposive and easy to work with. If they bid on your project, hire them, and I can assure you won’t be disappointed."
                                    clientImage="img/about/shay-wright.png"
                                    clientName="Shay Wright"
                                    clientDeg="Director of SEO Big Marketing"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <OurClientSlider
                                    clientReview="Mosharaf is a pleasure to work with. He and his team do excellent work and are very knowledgeable and talented. They are also always very resposive and easy to work with. If they bid on your project, hire them, and I can assure you won’t be disappointed."
                                    clientImage="img/about/shay-wright.png"
                                    clientName="Shay Wright"
                                    clientDeg="Director of SEO Big Marketing"/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default OurClient