import React, { useEffect } from 'react'
import $ from 'jquery'
import ContactForm from './ContactForm';

function ContactWrap() {
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
            <section className="contact-wrap">
                <div className="common-wrap clear">
                    <div className="contact-inner flex ">
                        <aside className="contact-content-wrap ">
                            <h2 className="middle-border">Contact Us</h2>
                            <div className="contact-info-wrap flex">
                                <div className="contact-info flex">
                                    <div className="contact-info-icon flex">
                                        <object type="image/svg+xml" data="svgs/routing.svg">
                                            <img src="svgs/routing.svg" alt=''/>
                                        </object>
                                    </div>
                                    <a href='https://www.google.com/maps/place/Webtricker+Web+Design+%26+Development+Agency/@24.9143954,89.9413507,229m/data=!3m1!1e3!4m5!3m4!1s0x0:0x209802aa6366f9da!8m2!3d24.9141901!4d89.9414119'rel="noreferrer" className="contact-info-content">
                                        <h5>Address</h5>
                                        <address>House No-46, Zia College Moar Beside Sohid Minar, Jamalpur, Bangladesh.
                                        </address>
                                    </a>
                                </div>
                                <div className="contact-info flex">
                                    <div className="contact-info-icon flex">
                                        <object type="image/svg+xml" data="svgs/call-calling.svg">
                                            <img src="svgs/call-calling.svg" alt=''/>
                                        </object>
                                    </div>
                                    <div className="contact-info-content">
                                        <h5>Phone</h5>
                                        <a href="tel:+8801712377577">+8801712377577</a>
                                        <a href="tel:+8801407090991">+8801407090991</a>
                                    </div>
                                </div>
                                <div className="contact-info flex">
                                    <div className="contact-info-icon flex">
                                        <object type="image/svg+xml" data="svgs/sms.svg">
                                            <img src="svgs/sms.svg" alt=''/>
                                        </object>
                                    </div>
                                    <div className="contact-info-content">
                                        <h5>Email</h5>
                                        <a href="mailto:info@webtricker.com">info@webtricker.com</a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactWrap;