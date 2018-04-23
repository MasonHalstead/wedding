import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import GalleryImage1 from '../../images/gallery-image-1.jpg';
import GalleryImage2 from '../../images/gallery-image-2.jpg';
import GalleryImage3 from '../../images/gallery-image-3.jpg';
import Flexbox from 'flexbox-react';

const HomeGallery = (props) => {

  return (

        <Flexbox className="component-container gallery-flex">
        <div className="gallery-image-left">
        <Image src={ GalleryImage1 } responsive/>
        </div>
        <div className="gallery-image-center">
        <Image src={ GalleryImage2 } responsive/>
        </div>
        <div className="gallery-image-right">
        <Image src={ GalleryImage3 } responsive/>
        </div>
        </Flexbox>

  );
};

export default HomeGallery;
