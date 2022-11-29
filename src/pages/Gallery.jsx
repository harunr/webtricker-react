import React from 'react'
import GalleryHero from '../components/gallery/GalleryHero'
import MainGallery from '../components/gallery/MainGallery'
import {Helmet} from "react-helmet";

function Gallery() {
  return (
    <>
    <Helmet><title>Webtricker | Gallery</title></Helmet>
        <section className="main-content-wrap">
            <GalleryHero/>
            <MainGallery/>
        </section>
    </>
  )
}

export default Gallery