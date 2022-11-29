import React from 'react'

function WhatWeOfferItem(props) {
  return (
    <>
        <div className="what-we-offer-item">
            <figure>
                <img src={props.imageSrc} alt="" />
            </figure>
            <div className="what-we-offer-item-content">
                <h3>{props.itemHeading}</h3>
                <p>{props.itemDesc}</p>
            </div>
        </div>
    </>
  )
}

export default WhatWeOfferItem