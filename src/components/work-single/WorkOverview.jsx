import React from 'react'

function WorkOverview(props) {
    

    return (
        <>
            <section className="workOverview">
                <div className="common-wrap clear flex-box ">
                    <div className="workOverviewThumb">
                        <figure>
                            <img src={props.websiteThumbnail} alt="Website Thumbnail" />
                        </figure>
                    </div>
                    <div className="workOverviewContent flex-box">
                        <p>{props.websiteDesc}</p>
                        <ul className="workOverviewFirst">
                            <li>Client:</li>
                            <li>Categories:</li>
                            <li>Start date:</li>
                            <li>Finish date:</li>
                            <li>Website:</li>
                        </ul>
                        <ul className='workOverviewLast'>
                            <li>{props.clientName}</li>
                            <li>{props.siteCategories}</li>
                            <li>{props.startDate}</li>
                            <li>{props.finishDate}</li>
                            <li><a href={props.websiteLink}>{props.websiteLink}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkOverview;