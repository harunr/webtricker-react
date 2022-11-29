import React from 'react';
import WWDComponent from './WWDComponent';
import WWDComponentData from './WWDComponentData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CardPath(val){
    return(

    <WWDComponent
        WWDComponentFClass={val.WWDComponentFClass}
        wwdComponentImage={val.wwdComponentImage}
        wwdComponentAlt={val.wwdComponentAlt}
        wwdComponentTitle={val.wwdComponentTitle}
        WWDComponentPara={val.WWDComponentPara}
    />

    )
 }

const WWDComponentWrap = (props) => {

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
        <div className="what-we-do-component-wrap ">
        <Slider {...settings}>
        {WWDComponentData.map(CardPath)}
                            
                            
                            
        </Slider>
        </div>
        
        
        </>


    )
}

export default WWDComponentWrap;
