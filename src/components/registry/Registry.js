import React from 'react';
import RegistryTile from './RegistryTile';

const Registry = (props) => {

  return (
    <React.Fragment>
      <h1>Registry</h1>
      <RegistryTile tiles={ props.registry.tiles }/>
    </React.Fragment>
  );
};

export default Registry;
