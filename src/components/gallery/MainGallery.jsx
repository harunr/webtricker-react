import React, {useState} from 'react'

function MainGallery() {

    let GalleryData = [
        {
            id: 1,
            GalleryImgSrc: 'img/gallery/image-9.jpg',
        },
        {
            id: 2,
            GalleryImgSrc: 'img/gallery/image-002.jpeg',
        },
        {
            id: 3,
            GalleryImgSrc: 'img/gallery/image-2.jpg',
        },
        {
            id: 4,
            GalleryImgSrc: 'img/gallery/image-6.JPEG',
        },
        {
            id: 5,
            GalleryImgSrc: 'img/gallery/image-3.jpg',
        },
        {
            id: 6,
            GalleryImgSrc: 'img/gallery/image-4.jpg',
        },
        {
            id: 7,
            GalleryImgSrc: 'img/gallery/image-10.jpg',
        },
        {
            id: 8,
            GalleryImgSrc: 'img/gallery/image-14.jpg',
        },
        {
            id: 9,
            GalleryImgSrc: 'img/gallery/image-7.jpg',
        },
        {
            id: 10,
            GalleryImgSrc: 'img/gallery/image-5.png',
        },
        {
            id: 11,
            GalleryImgSrc: 'img/gallery/image-1.jpeg',
        },
        {
            id: 12,
            GalleryImgSrc: 'img/gallery/team.jpg',
        },
        {
            id: 13,
            GalleryImgSrc: 'img/gallery/image-11.jpg',
        },
        {
            id: 14,
            GalleryImgSrc: 'img/gallery/image-12.JPEG',
        },
        {
            id: 15,
            GalleryImgSrc: 'img/gallery/image-15.jpeg',
        },
        {
            id: 16,
            GalleryImgSrc: 'img/gallery/image-13.jpg',
        },
        {
            id: 17,
            GalleryImgSrc: 'img/gallery/image-8.jpg',
        },
    ]

    const [modal, setModal] = useState(false)
    const [tempImageSrc, setTempImageSrc] = useState('')
    const getImg  = (GalleryImgSrc) =>{
        setTempImageSrc(GalleryImgSrc)
        setModal(true)
    }

  return (
    <>
        <div className={modal? "gallery-modal open": "gallery-modal"}>
            <img src={tempImageSrc} alt="" />
            <div className="gallery-modal-close" onClick={() => setModal(false)}></div>
        </div>
        <div className="gallery">
            <div className="common-wrap clear">
                <div className="gallery-inner">
                    {GalleryData.map((item, index) => {
                        return(
                            <div className='gallery-item' key={index}>
                                <img src={item.GalleryImgSrc} alt="Gallery" onClick={() => getImg(item.GalleryImgSrc)}/>
                            </div>
                        )
                    })}
                </div>
           
            </div>
        </div>
    </>
  )
}

export default MainGallery