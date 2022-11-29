import React, {useEffect} from 'react'
import PortfolioTabItem from './PortfolioTabItem'
import PortfolioTabItems from './PortfolioTabItems'
import PortfolioTabTrigger from './PortfolioTabTrigger'
import $ from "jquery";

function PortfolioWrap() {
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



    $('.portfolioTabItemWrapper').each(function(){
        var $$this = $(this);
        $$this.find(".PortfolioTabItem").slice(0, 6).show();
        $$this.find('.portfolio-btn a').off().on('click', function(event){
            event.preventDefault()
            console.log('red')
            $$this.find(".PortfolioTabItem:hidden").slice(0, 3).slideDown();
            if ( $$this.find(".PortfolioTabItem:hidden").length === 0) {
                $$this.find(".portfolio-btn").css('display', 'none');
            }
        })
    })
    


    }, 1000)

    })
    useEffect(function() {
    $('.portfolio-tab-trigger ul li').eq(0).addClass('tab-active');
    $('.portfolioTabItemWrapper').eq(0).show();
    $('.portfolio-tab-trigger ul li a').on('click', function(e){
    e.preventDefault()
    $('.portfolio-tab-trigger ul li').removeClass('tab-active');
    $(this).parent('li').addClass('tab-active');
    $('.portfolioTabItemWrapper').hide();  
    var activeTab = $(this).attr('href');
    $(activeTab).fadeIn();
    return false;
    });

    $('.portfolioTabItemWrapper').each(function(){
        var $$this = $(this);
        var $this = $$this.find('.PortfolioTabItem').length
        if($this < 7 && $this > 0){
            $$this.find('.portfolio-btn').hide()
        }else{
            $$this.find('.portfolio-btn').show()
        }
    })
   


    })
  return (
    <>
        <section className="portfolio-wrap">
            <div className="common-wrap clear">
                <div className="portfolio-inner">
                    <PortfolioTabTrigger />
                    <div className="portfolioTabItemWrap">
                        <div className="portfolioTabItemWrapper" id="tab-1">
                            <PortfolioTabItems>
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/image-1.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/mango.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/ice-cream-parlour.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/wedding.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/island.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/cat-society.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bicycle.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/radio.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/diamond-jewellery.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/softics.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/beauty-of-bangladesh.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/covid.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/e-shop-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/watch.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/sundarban-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bengal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/royal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/smartedu.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/webhance.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/tourism.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/clicky.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/flower-garden.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bmw-car.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bengal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/royal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/dit-corporation.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/child-mathmatics-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/it-tricker.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bs-card.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/tech-solution.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/business-card.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/black-butt.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/rapid-files.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bengal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/royal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/dit-corporation.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/child-mathmatics-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/it-tricker.jpg"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-2">
                            <PortfolioTabItems>
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bengal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/royal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/dit-corporation.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/child-mathmatics-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/it-tricker.jpg"
                                />
                                
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-3">
                            <PortfolioTabItems>
                                
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/ice-cream-parlour.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/wedding.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/news-portal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/dev-team.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/apartment.jpg"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-4">
                            <PortfolioTabItems>
                                
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/legendminig.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bd-holiday.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/carnarvon.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/my-credit.png"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-5">
                            <PortfolioTabItems>
                               
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/mango.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/ice-cream-parlour.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/wedding.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/island.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/cat-society.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bicycle.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/radio.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/diamond-jewellery.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/softics.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/beauty-of-bangladesh.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/covid.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/e-shop-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/watch.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/sundarban-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bengal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/royal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/smartedu.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/webhance.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/tourism.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/clicky.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/flower-garden.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bmw-car.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bengal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/royal.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/dit-corporation.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/child-mathmatics-bg.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/it-tricker.jpg"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-6">
                            <PortfolioTabItems>
                                
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/hotel-booking.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/mobz.jpg"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-7">
                            <PortfolioTabItems>
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/lms.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/shopit.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/kg-bangladesh.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/nokshikaj.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/chamrose.jpg"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-8">
                            <PortfolioTabItems>
                            <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/lms.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/shopit.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/kg-bangladesh.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/nokshikaj.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/chamrose.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/barefoot.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bd-health.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/carnarvon.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/my-credit.png"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/airgle.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/micromain.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/abestfive.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/Image-8@2x.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/exfilla.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/Image-5@2x.jpg"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                        <div className="portfolioTabItemWrapper" id="tab-9">
                            <PortfolioTabItems>
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/bs-card.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/tech-solution.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/business-card.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/black-butt.jpg"
                                />
                                <PortfolioTabItem
                                    PortfolioTabImage="img/portfolio/rapid-files.jpg"
                                />
                            </PortfolioTabItems>
                            <div className="portfolio-btn">
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
                </div>
            </div>
        </section>
    </>
  )
}

export default PortfolioWrap