import React from 'react';


const WWDComponent = (props) =>{

    return(

        <>
        <div className={props.WWDComponentFClass}>
            <div className="what-we-do-component-logo-wrap flex">
                <div className="what-we-do-component-logo flex">
                    <object type="image/svg+xml" data={props.wwdComponentImage}>
                        <img src={props.wwdComponentImage} alt={props.wwdComponentAlt}/>
                    </object>
                </div>
            </div>
            <div className="what-we-do-component-content">
                <h3>{props.wwdComponentTitle}</h3>
                <p>{props.WWDComponentPara}</p>
            </div>
        </div>
        </>

    )
}


export default WWDComponent;