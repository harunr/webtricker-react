import React, { useEffect } from 'react'
import $ from 'jquery'

function Hero(props) {
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

    return (
        <>
            <section className='mainHeroWrap'>
                <figure>
                    <img src={props.heroImage} alt="" />
                </figure>
                <div className="mainHeroContent">
                    <div className="common-wrap clear">
                        <h1>{props.heroTitle}</h1>
                        <p>{props.heroDesc}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;