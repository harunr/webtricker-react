import React from 'react';
import TeamData from './TeamData';
import OurTeamItem from './OurTeamItem';


const teamPath = (val) =>{
    return(
        <OurTeamItem
        teamClass={val.teamClass}
        memberImage={val.memberImage}
        memberImageAlt={val.memberImageAlt}
        memberName={val.memberName}
        memberDesc={val.memberDesc}
        memberFBLink={val.memberFBLink}
        memberTWLink={val.memberTWLink}
        memberLNLink={val.memberLNLink}
        memberFBIco={val.memberFBIco}
        memberTWIco={val.memberTWIco}
        memberLNIco={val.memberLNIco}
        memberFBAlt={val.memberFBAlt}
        memberTWAlt={val.memberTWAlt}
        memberLNAlt={val.memberLNAlt}
        />
    )
}



const TeamItemWrap = () => {

    return(
        <>
        <div className="team-members-wrap">
            {TeamData.map(teamPath)}
        </div>
        
        </>
    )

}


export default TeamItemWrap;