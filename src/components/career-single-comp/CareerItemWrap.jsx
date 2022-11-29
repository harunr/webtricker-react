import React from 'react'

function CareerItemWrap(props) {
  return (
    <>
        <section className="career-description">
            <div className="common-wrap clear">
                <div className="career-description-item-wrap">
                    {props.children}
                </div>
            </div>
        </section>
    </>
  )
}

export default CareerItemWrap