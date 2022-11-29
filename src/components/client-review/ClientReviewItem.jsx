import React from 'react';


const ClientReviewItem = (props) => {

    return(

        <>
        <div className="client-review-item">
            <div className="client-review-item-thumb">
                <figure>
                    <img src={props.reviewerImage} alt="Reviewer Bg"/>
                </figure>
            </div>
            <div className="client-review-item-content">
                <h5>{props.reviewerName}</h5>
                <span>{props.reviewerDesc}</span>
                <p>{props.reviewerReview}</p>
                <div className="review-start">
                    <figure>
                        <img src={props.reviewerStarBlack} alt="Iconly Star" />
                        <img src={props.reviewerStarBlack} alt="Iconly Star" />
                        <img src={props.reviewerStarBlack} alt="Iconly Star" />
                        <img src={props.reviewerStarBlack} alt="Iconly Star" />
                        <img src={props.reviewerStarBlack} alt="Iconly Star" />
                    </figure>
                </div>
            </div>
        </div>
        </>

    )

}


export default ClientReviewItem;