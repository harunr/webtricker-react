import React from 'react'

function FacilitiesItem(props) {
  return (
    <>
        <div className="facilities-item">
            <p>{props.facilitiesItemText}</p>
        </div> 
    </>
  )
}

export default FacilitiesItem