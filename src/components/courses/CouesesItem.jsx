/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import $ from 'jquery';

function CouesesItem(props) {

    useEffect(function() {
        $('.course-item').each(function(){
            var $$this = $(this);
            $$this.find('.details-btn a').off().on('click', function(e){
                e.preventDefault();
                $$this.addClass('hover-text-show')
                setTimeout(function(){
                    $$this.removeClass('hover-text-show')
                }, 6500)
            })
            
        })
        
    });


  return (
    <>
        <div className="course-item">
            <div className="course-thumb">
                <figure>
                    <img src={props.courseImage} alt="" />
                </figure>
                <h3>{props.courseCaption}</h3>
            </div>
            <div className="course-item-content">
                <ul>
                    <li><dfn>Course Duration</dfn> <div></div> <em>{props.courseMonth}</em></li>
                    <li><dfn>Number of Class</dfn> <div></div> <em>{props.courseClasses}</em></li>
                    <li><dfn>Class Length</dfn> <div></div> <em>{props.courseHours}</em></li>
                </ul>
                <div className="details-btn">
                    <a class="btn button button--nina" data-text="Details" href="#">
                        <span>D</span>
                        <span>e</span>
                        <span>t</span>
                        <span>a</span>
                        <span>i</span>
                        <span>l</span>
                        <span>s</span>
                    </a>
                </div>
                <div className="course-item-hover">
                    <p>Please call/mail us for information</p>
                    <ul>
                        <li><a href="tel:01907070800">01907070800</a></li>
                        <li><a href="mailto:info@webtricker.com">info@webtricker.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default CouesesItem
