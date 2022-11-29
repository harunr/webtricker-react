import {React, useEffect} from 'react'
import $ from 'jquery'
import ContactWrap from '../components/contact-wrap/ContactWrap'
import ContactHero from '../components/hero/contact-hero/ContactHero'
import ContactMap from '../components/contact-wrap/ContactMap';
import {Helmet} from "react-helmet";

function Contact() {

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
    <Helmet><title>Webtricker | Contact</title></Helmet>
        <section className="main-content-wrap contact-page">
            <ContactHero/>
            <ContactWrap/>
            <ContactMap/>
        </section>
    </>
  )
}

export default Contact