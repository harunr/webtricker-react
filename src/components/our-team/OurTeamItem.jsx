import React from 'react';


const OurTeamItem = (props) => {
return(
    <>
    <div className={props.teamClass}>
        <div className="team-member-thumb">
            <figure>
                <img src={props.memberImage} alt={props.memberImageAlt}/>
            </figure>
        </div>
        <div className="team-member-content">
            <h5>{props.memberName}</h5>
            <span>{props.memberDesc}</span>
            <div className="team-member-social-wrap">
                <ul>
                    <li><a href={props.memberFBLink} target="_blank" rel="noreferrer"><img src={props.memberFBIco} alt={props.memberFBAlt}/></a></li>
                    <li><a href={props.memberTWLink} target="_blank" rel="noreferrer"><img src={props.memberTWIco} alt={props.memberTWAlt}/></a></li>
                    <li><a href={props.memberLNLink} target="_blank" rel="noreferrer"><img src={props.memberLNIco} alt={props.memberLNAlt}/></a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
)
}

export default OurTeamItem;