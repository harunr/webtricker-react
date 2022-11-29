import React from 'react';
import WorkPosterItem from './WorkPosterItem'
import './WorkSinglePoster.css';

function WorkSinglePoster() {
    

    return (
        <>
            <section className="posterGallery">
                <div className="common-wrap clear">
                    <div className="posterGalleryInner">
                        <div className="posterGalleryItemWrapper ItemBig">
                            
                            <WorkPosterItem
                                posterGalleryTitle="Home Page"
                                posterGalleryDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, possimus libero, error exercitationem rerum reprehenderit"
                                itemPosterSrc="img/worksSingle/poster-1.webp"
                            />
                        </div> 
                        <div className="posterGalleryItemWrapper flex-box">
                            <WorkPosterItem
                             posterGalleryTitle="Home Page"
                             posterGalleryDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, possimus libero, error exercitationem rerum reprehenderit"
                                itemPosterSrc="img/worksSingle/poster-2.webp"
                            />
                            <WorkPosterItem
                                posterGalleryTitle="Home Page"
                                posterGalleryDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,"
                                itemPosterSrc="img/worksSingle/poster-7.webp"
                            />
                        </div> 
                        <div className="posterGalleryItemWrapper flex-box">
                            <WorkPosterItem
                                itemPosterSrc="img/worksSingle/poster-4.webp"
                            />
                           <WorkPosterItem
                                itemPosterSrc="img/worksSingle/poster-3.webp"
                            />
                        </div>
                        <div className="posterGalleryItemWrapper flex-box ItemBig">
                            <WorkPosterItem
                                itemPosterSrc="img/worksSingle/poster-8.webp"
                            />
                        </div>
                        <div className="posterGalleryItemWrapper flex-box">
                            <WorkPosterItem
                                itemPosterSrc="img/worksSingle/poster-6.webp"
                            />
                            <WorkPosterItem
                                itemPosterSrc="img/worksSingle/poster-5.webp"
                            />
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkSinglePoster;