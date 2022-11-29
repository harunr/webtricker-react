import React from 'react';
import ClientReviewItem from './ClientReviewItem';
import ReviewItemData from './ReviewItemData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewDataPath = (val) => {
    return(

        <>
            <ClientReviewItem
                reviewerImage={val.reviewerImage}
                reviewerName={val.reviewerName}
                reviewerDesc={val.reviewerDesc}
                reviewerReview={val.reviewerReview}
                reviewerStarBlack={val.reviewerStarBlack}
                reviewerStarWhite={val.reviewerStarWhite}
            
            />
        </>

    )
}


const ClientReviewItemWrap = () => {
    const settings = {
		dots: false,
		arrows: false,
        infinite: false,
		responsive: [
			{
				breakpoint: 999999,
				settings: "unslick"
			},
            {
                breakpoint: 769,
				settings: {
                    dots: false,
		            arrows: false,
                    slidesToShow: 2.2,
                    slidesToScroll: 2,
                    infinity: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinity: false,
                }
            }
		]
      };
    return(

        <>
            <div className="client-review-item-wrap">
                <Slider {...settings}>
                    {ReviewItemData.map(reviewDataPath)}
                </Slider>
            </div>
        </>

    )

}


export default ClientReviewItemWrap;