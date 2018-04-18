import React from 'react';
import GalleryImages from './GalleryImages';

const Gallery = (props) => {

  return (
    <React.Fragment>
      <h1>Image Gallery</h1>
      <GalleryImages images={ props.gallery.images }/>
    </React.Fragment>
  );
};

export default Gallery;
