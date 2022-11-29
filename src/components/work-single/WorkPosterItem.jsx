import React from 'react';


 function WorkPosterItem(props) {
  return (
    <div className="posterGalleryItem">
          <h2 className='mb-20'>{props.posterGalleryTitle}</h2>
          <p className='mb-20'>{props.posterGalleryDesc}</p>
          <figure>
              <img src={props.itemPosterSrc} alt="Poster" />
          </figure>
    </div>
  )
}

export default WorkPosterItem;