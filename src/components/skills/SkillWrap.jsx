import React, { useEffect } from 'react'
import $ from 'jquery'
import SkillItem from './SkillItem';
import SkillItemData from './SkillItemData';
import Slider from "react-slick";
function SkillCardPath(val){
    return(

    <SkillItem
        SkillItemFClass={val.SkillItemFClass}
        SkillItemTitle={val.SkillItemTitle}
        SkillItemDataPercent={val.SkillItemDataPercent}
        SkillItemImgLight={val.SkillItemImgLight}
        SkillItemAlt1={val.SkillItemAlt}
        SkillItemImgDark={val.SkillItemImgDark}
        SkillItemAlt2={val.SkillItemAlt}
        backgImage={val.backgImage}
        SkillItemPercent={val.SkillItemPercent}
    />

    )
 }


const SkillWrap = () =>{
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
		responsive: [
			
            {
                breakpoint: 780,
				settings: {
                    dots: false,
		            arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
 useEffect(function() {
    var $animation_elements = $('.animate-from-bottom');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height() / 1.3;
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_top_position = $element.offset().top;
            if (element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
            } else {}
        });
    }
    $window.on('scroll resize',check_if_in_view);$window.trigger('scroll');
  });

    return(
        <>
        
        <section className="our-skil-wrap">
                <div className="common-wrap clear">
                    <div className="our-skil-inner animate-from-bottom">
                        <h2 className="middle-border">Our Skills</h2>
                        <div className="our-skills-item-wrap flex">
                            <Slider {...settings}>
                                {SkillItemData.map(SkillCardPath)}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}



export default SkillWrap;