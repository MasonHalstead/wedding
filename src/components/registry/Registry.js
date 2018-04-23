import React from 'react';
import RegistryTile from './RegistryTile';

const Registry = (props) => {

  return (
    <div className="component-container">
      <RegistryTile tiles={ props.registry.tiles }/>
    </div>
  );
};

export default Registry;
