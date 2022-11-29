import React from 'react'

function PortfolioTabItems(props) {
  return (
    <>
        <div className="PortfolioTabItems" id={props.tabId}>
            {props.children}
        </div>
    </>
  )
}

export default PortfolioTabItems