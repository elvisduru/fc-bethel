import React, { useState, useCallback } from 'react';
import styles from './Gallery.module.css';

import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import img1 from '../../images/gallery/img_1.jpeg';
import img2 from '../../images/gallery/img_2.jpeg';
import img3 from '../../images/gallery/img_3.jpeg';
import img4 from '../../images/gallery/img_4.jpeg';
import img5 from '../../images/gallery/img_5.jpeg';
import img6 from '../../images/gallery/img_6.jpeg';
import img7 from '../../images/gallery/img_7.jpeg';
import img8 from '../../images/gallery/img_8.jpeg';
import img9 from '../../images/gallery/img_9.jpeg';
import img10 from '../../images/gallery/img_10.jpeg';
import img11 from '../../images/gallery/img_11.jpeg';
import img12 from '../../images/gallery/img_12.jpeg';
import img13 from '../../images/gallery/img_13.jpeg';
import img14 from '../../images/gallery/img_14.jpeg';
import img15 from '../../images/gallery/img_15.jpeg';
import img16 from '../../images/gallery/img_16.jpeg';
import img17 from '../../images/gallery/img_17.jpeg';
import img18 from '../../images/gallery/img_18.jpeg';
import img19 from '../../images/gallery/img_19.jpeg';
import img20 from '../../images/gallery/img_20.jpeg';
import img21 from '../../images/gallery/img_21.jpeg';
import img22 from '../../images/gallery/img_22.jpeg';
import img23 from '../../images/gallery/img_23.jpeg';
import img24 from '../../images/gallery/img_24.jpeg';
import img25 from '../../images/gallery/img_25.jpeg';
import img26 from '../../images/gallery/img_26.jpeg';
import img27 from '../../images/gallery/img_27.jpeg';
import img28 from '../../images/gallery/img_28.jpeg';
import Menu from '../../containers/Menu/Menu';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: img1,
      width: 1,
      height: 1
    },
    {
      src: img2,
      width: 1,
      height: 1
    },
    {
      src: img3,
      width: 1,
      height: 1
    },
    {
      src: img4,
      width: 1,
      height: 1
    },
    {
      src: img5,
      width: 1,
      height: 1
    },
    {
      src: img6,
      width: 1,
      height: 1
    },
    {
      src: img7,
      width: 1,
      height: 1
    },
    {
      src: img8,
      width: 1,
      height: 1
    },
    {
      src: img9,
      width: 1,
      height: 1
    },
    {
      src: img10,
      width: 1,
      height: 1
    },
    {
      src: img11,
      width: 1,
      height: 1
    },
    {
      src: img12,
      width: 1,
      height: 1
    },
    {
      src: img13,
      width: 1,
      height: 1
    },
    {
      src: img14,
      width: 1,
      height: 1
    },
    {
      src: img15,
      width: 1,
      height: 1
    },
    {
      src: img16,
      width: 1,
      height: 1
    },
    {
      src: img17,
      width: 1,
      height: 1
    },
    {
      src: img18,
      width: 1,
      height: 1
    },
    {
      src: img19,
      width: 1,
      height: 1
    },
    {
      src: img20,
      width: 1,
      height: 1
    },
    {
      src: img21,
      width: 1,
      height: 1
    },
    {
      src: img22,
      width: 1,
      height: 1
    },
    {
      src: img23,
      width: 1,
      height: 1
    },
    {
      src: img24,
      width: 1,
      height: 1
    },
    {
      src: img25,
      width: 1,
      height: 1
    },
    {
      src: img26,
      width: 1,
      height: 1
    },
    {
      src: img27,
      width: 1,
      height: 1
    },
    {
      src: img28,
      width: 1,
      height: 1
    },
  ];


  return (
    <div className={styles.Gallery}>
      <Menu color="#000" bgColor="#fff" />
      <main>
        <h2>Gallery</h2>
        <div className={styles.content}>
          <PhotoGallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal
                onClose={closeLightbox}
              >
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </main>
    </div>
  )
}

export default Gallery;