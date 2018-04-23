import React from 'react';
import GalleryImages from './GalleryImages';

const Gallery = (props) => {

  return (
    <div className="component-container">
      <GalleryImages className="component-container" images={ props.gallery.images }/>
    </div>
  );
};

export default Gallery;
