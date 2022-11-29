import React, {useEffect} from 'react';
import OurWorksItemWrap from './OurWorksItemWrap';
import $ from "jquery";





export default function OurWorks (props) {
  
    useEffect(function(){

        setTimeout(function(){
            
    

            if($(window).width() > 768){
    
                $(".our-work-component").slice(0, 6).show();
                $(".our-work-component").slice(0, 6).addClass('anim');
            }
            if($(window).width() < 769){
    
                $(".our-work-component").slice(0, 3).show();
                $(".our-work-component").slice(0, 3).addClass('anim');
            }
       
    
        $('.our-work-btn a').off().on('click', function(event){
            event.preventDefault()
            console.log('red')
            $(".our-work-component:hidden").slice(0, 3).slideDown();
            $(".in-view").next().addClass('in-view');
            $(".in-view").next().addClass('in-view');
            $(".in-view").next().addClass('in-view');
            if ($(".our-work-component:hidden").length === 0) {
                $(".our-work-btn a").css('visibility', 'hidden');
            }
        })

        $(window).on('load', function(){
            var $animation_elements = $('.animate-from-bottom');
            var $window = $(window);
        
            function check_if_in_view() {
                var window_height = $window.height();
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
          })


        var offsetTop = $('.our-work-wrap').offset().top - `${$(window).outerHeight() / 2}`;

        console.log(offsetTop)
        $(window).on('scroll', function(){
            var scrollPos = $(this).scrollTop();
            if(scrollPos > offsetTop){
                $('.anim').addClass('in-view')
            }
        })
  
    }, 1000)
    
    })


    return(
        <>
            <section className="our-work-wrap">
                <div className="common-wrap clear">
                    <div className="our-work-inner">
                        <h2 className="middle-border">{props.OurWorksIntroTitle}</h2>
                        <OurWorksItemWrap/>
                        <div className="our-work-btn">
                            <a href="/" className="btn button button--nina" data-text="Load More">
                                <span>L</span>
                                <span>o</span>
                                <span>a</span>
                                <span>d</span>
                                <span>&nbsp;</span>
                                <span>M</span>
                                <span>o</span>
                                <span>r</span>
                                <span>e</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
