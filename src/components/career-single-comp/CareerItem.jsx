import React from 'react'

function CareerItem(props) {
  return (
    <>
        
        <div className="career-description-item">
            <h3>{props.CareerItemHeading}</h3>
            {props.children}
        </div>
                
    </>
  )
}

export default CareerItem