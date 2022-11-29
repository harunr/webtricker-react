import React from 'react';


const MarqueeItem = (props) => {
    return(
        <>
        <div className="marquee-slider-item">
            <figure>
                <img src={props.MarqueThumb} alt={props.expertiseTitle}/>
            </figure>
            <h3>{props.expertiseTitle}</h3>
        </div>
        </>
    )
}

export default MarqueeItem;