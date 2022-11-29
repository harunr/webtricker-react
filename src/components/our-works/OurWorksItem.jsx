import React from 'react';


const OurWorksItem = (props) =>{

    return(
    <>
        <a href={props.workLink} className="our-work-component">
            <div className="our-work-component-thumb">
                <figure>
                    <img src={props.workImage} alt={props.workImageAlt}/>
                </figure>
            </div>
            <div className="our-work-component-title">
                <h3>{props.workTitle}</h3>
            </div>
        </a>
    </>
    )    

}


export default OurWorksItem;