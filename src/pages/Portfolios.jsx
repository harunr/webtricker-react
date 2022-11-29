import React, {useEffect} from 'react'
import PortfolioHero from '../components/portfolios/PortfolioHero'
import PortfolioWrap from '../components/portfolios/PortfolioWrap'
import {Helmet} from "react-helmet";
import $ from 'jquery';
function Portfolios() {
  useEffect(() => {
    if($('.portfolio-page').length){
      $('body').addClass('portfolio-page')
    }
  })
  return (
    <>
        <Helmet><title>Webtricker | Portfolios</title></Helmet>
        <section className="main-content-wrap portfolio-page">
            <PortfolioHero/>
            <PortfolioWrap/>
        </section>
    </>
  )
}

export default Portfolios