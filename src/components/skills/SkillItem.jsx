import React from 'react';


const SkillItem = (props) => {

    return(
        <>
            <div className={props.SkillItemFClass} data-percent={props.SkillItemDataPercent}>
                <h4>{props.SkillItemTitle}</h4>
                <div className="skills-progress-bar">
                    <figure>
                        <img src={props.SkillItemImgLight} alt={props.SkillItemAlt1}/>
                    </figure>
                    <figure className="dark-mode-logo">
                        <img src={props.SkillItemImgDark} alt={props.SkillItemAlt2}/>
                    </figure>
                    <div className='bg-image'>
                        <img src={props.backgImage} alt="" />
                    </div>
                </div>
                <h2 className="value"><span className="counter1">{props.SkillItemPercent}</span>%</h2>
            </div>
        </>
    )

}

export default SkillItem;