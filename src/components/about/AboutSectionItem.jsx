import React from 'react'

function AboutSectionItem(props) {
  return (
    <>
        <div className="about-section-item">
            <h5>{props.itemTitle}</h5>
            <p>{props.itemdesc}</p>
        </div>
    </>
  )
}

export default AboutSectionItem