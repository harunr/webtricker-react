import React from 'react'

function OurClientSlider(props) {
  return (
    <>
        <div className="our-client-slider">
            <p>{props.clientReview}</p>
            <div className="client-details">
                <figure>
                    <img src={props.clientImage} alt="" />
                </figure>
                <div className="client-details-content">
                    <h4>{props.clientName}</h4>
                    <dfn>{props.clientDeg}</dfn>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurClientSlider