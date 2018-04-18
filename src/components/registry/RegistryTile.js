import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';
import Flexbox from 'flexbox-react';

const RegistryTile = (props) => {
  const registry = (
    <React.Fragment>
      {props.tiles.map((header) =>

        <div className="retailer-item" key={header.title}>
        <div className="retailer-item-inner">
        <Link to={header.href} target="_blank">
        <div className="retailer-item-image" style={ { backgroundImage: `url(${header.src})` } }>

        </div>
        <Button bsStyle="primary" className="btn-registry">Shop Our Registry</Button>
        </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );

  return (
    <Row className="show-grid">
        <Flexbox flexDirection="row" justifyContent="space-around" flexWrap="wrap">
        { registry }
        </Flexbox>
    </Row>
  );
};

export default RegistryTile;
