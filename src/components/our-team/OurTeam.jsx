import React, { useEffect } from 'react'
import $ from 'jquery'
import OurTeamItemWrap from './OurTeamItemWrap';

const OurTeam = () => {
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
    useEffect(function(){

        setTimeout(function(){
            
            if($(window).width() > 768){

                $(".team-member").slice(0, 8).show();
                $('.team-members-btn a').off().on('click', function(event){
                    event.preventDefault()
                    console.log('red')
                    $(".team-member:hidden").slice(0, 4).slideDown();
                    if ($(".team-member:hidden").length === 0) {
                        $(".team-members-btn").css('display', 'none');
                    }
                })
            }
            
    }, 1000)

    })




    return(
        <>
        <section className="team-wrap">
            <div className="common-wrap clear">
                <div className="team-inner animate-from-bottom">
                    <h2 className="middle-border">Our Team</h2>
                    <OurTeamItemWrap/>
                    <div className="team-members-btn animate-from-bottom">
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

export default OurTeam;
