import React from 'react'

function BestFeaturesItem(props) {
  return (
    <>
        <div className="bestfeatures-item">
            <figure>
                <img src={props.bestfeaturesImage} alt="" />
            </figure>
            <div className="bestfeatures-content">
                <h4>{props.bestfeaturesTitle} </h4>
                <p>{props.bestfeaturesDesc}</p>
            </div>
        </div>
    </>
  )
}

export default BestFeaturesItem