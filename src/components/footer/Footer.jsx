import React, {useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';
import $ from 'jquery';
function Footer() {

    const form = useRef();

    const subscribe = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7m84sdr', 'template_pajujlo', form.current, 'cfRho7vWafjuPiyZc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    useEffect(() => {
        $('.footer-widget ul li a, .vacancy-item').on('click', function(){
            $('html,body').animate({scrollTop: 0},'slow');
        })
    }, [])
    return (
        <>
        <footer className="main-footer-section">
            <div className="footer-bg">
                <figure>
                    <img src="svgs/footer-bg.svg" alt="footer-bg"/>
                </figure>
            </div>
            <div className="common-wrap clear">
                <div className="footer-inner flex">
                    <div className="footer-widget-wrap flex">
                        <div className="footer-widget big animate-from-bottom">
                            <div className="footer-logo">
                                <Link to="/"><img src="svgs/webtricker-logo.svg" alt="webtricker"/></Link>
                            </div>
                            <p>Webtricker Web Design &amp; Development Agency is a total solution of your website related requirements. From branding to web design and then web design to web development. And finally deploy to the hosting. We do everything as one stop service center. So, just tell us your requirements and be relaxed. We will do the rest!</p>  
                        </div>
                        <div className="footer-widget animate-from-bottom">
                            <h5>Our Pages</h5>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/blog">Lastest Post</Link></li>
                                <li><Link to="/blog">Tips</Link></li>
                                <li><Link to="/blog">Advertising</Link></li>
                                <li><Link to="/contact">Contacts Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-widget animate-from-bottom">
                            <h5>Services</h5>
                            <ul>
                                <li><Link to="/service">Web Development</Link></li>
                                <li><Link to="/service">UI/UX Design</Link></li>
                                <li><Link to="/service">SEO</Link></li>
                                <li><Link to="/service">Digital Marketing</Link></li>
                                <li><Link to="/service">Graphic Design</Link></li>
                            </ul>
                        </div>
                        <div className="footer-widget follow animate-from-bottom">
                            <h5>Follow us on</h5>
                            <div className="footer-social-wrap">
                                <ul>
                                    
                                    <li><a href="https://www.facebook.com/webtricker" target="_blank" rel="noreferrer"><img src="svgs/Facebook.svg" alt="Facebook"/></a></li>
                                    <li><a href="https://twitter.com/webtricker" target="_blank" rel="noreferrer"><img src="svgs/Twitter.svg" alt="Twitter"/></a></li>
                                    <li><a href="https://bd.linkedin.com/company/webtricker" target="_blank" rel="noreferrer"><img src="svgs/LinkedIn.svg" alt="LinkedIn"/></a></li>
                                    <li><a href="https://www.youtube.com/c/Webtricker/featured" target="_blank" rel="noreferrer"><img src="svgs/YouTube.svg" alt="YouTube"/></a></li>
                                </ul>
                            </div>
                            <form ref={form} onSubmit={subscribe}>
                                <div className="footer-input-wrap">
                                    <div className="footer-input">
                                        <input type="email" placeholder="Enter your email..." name='email'/>
                                    </div>
                                    <div className="footer-input submit">
                                        <input type="submit" value="SUBSCRIBE"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="common-wrap clear">
                    <div className="footer-bottom-inner flex">
                        <div className="copyright-text">
                            <p>© 2014-2022 Webtricker Web Design &amp; Development Agency. All Rights Reserved.</p>
                        </div>
                        <div className="footer-bottom-nav">
                            <ul>
                                <li><a href="https://www.webtricker.com/privacy-policy">Privacy &amp; Policy</a> &nbsp; |</li>
                                <li><a href="https://www.webtricker.com/terms-condition">Terms &amp; Condition</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;