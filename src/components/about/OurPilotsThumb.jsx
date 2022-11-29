import React from 'react'

function OurPilotsThumb(props) {
  return (
    <>
    <div className="our-pilots-thumb">
        <figure>
            <img src={props.pilotsImage} alt="" />
        </figure>
        <div className="our-pilots-hover-content">
            <h5>{props.pilotsDeg}</h5>
            <h3>{props.pilotsName}</h3>
        </div>
    </div>
    </>
  )
}

export default OurPilotsThumb