import React from 'react';
import GalleryImages from './GalleryImages';

const Gallery = (props) => {

  return (
    <div className="container component-container">
      <GalleryImages images={ props.gallery.images }/>
    </div>
  );
};

export default Gallery;
