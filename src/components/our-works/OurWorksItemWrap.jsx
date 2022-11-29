import React from 'react';
import OurWorksItem from './OurWorksItem';
import OurWorksData from './OurWorksData';



const workData = (val) =>{



return(
<OurWorksItem
        workLink={val.workLink}
        workImage={val.workImage}
        workImageAlt={val.workImageAlt}
        workTitle={val.workTitle}
/>
)
    


}



const OurWorksItemWrap = () => {
    

    return(
        <>
            <div className="our-work-component-wrap">
                {OurWorksData.map(workData)}
            </div>
        </>
    )

}


export default OurWorksItemWrap;