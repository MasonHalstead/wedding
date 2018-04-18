import React from 'react';
import Gallery from 'react-grid-gallery';
import { Row } from 'react-bootstrap';

const GalleryImages = (props) => {
  return (
    <Row id="image-gallery" className="show-grid">
    <Gallery images={props.images}/>
    </Row>
  );
};

export default GalleryImages;
