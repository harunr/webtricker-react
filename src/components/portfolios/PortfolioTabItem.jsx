/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function PortfolioTabItem(props) {
  return (
    <>
        <a href='javascript:void(0)' className="PortfolioTabItem">
            <figure>
                <img src={props.PortfolioTabImage} alt="" />
            </figure>
        </a>
    </>
  )
}

export default PortfolioTabItem