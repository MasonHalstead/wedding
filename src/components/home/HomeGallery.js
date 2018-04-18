import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import HeaderImage from '../../images/landing-banner.jpg';
import Flexbox from 'flexbox-react';

const HomeGallery = (props) => {

  return (
    <Row className="show-grid">
        <h2>Photo Gallery</h2>
        <Flexbox flexDirection="row" justifyContent="space-between">
        <div>
        <Image src={HeaderImage} responsive/>
        </div>
        <div>
        <Image src={HeaderImage} responsive/>
        </div>
        <div>
        <Image src={HeaderImage} responsive/>
        </div>
        </Flexbox>
    </Row>
  );
};

export default HomeGallery;
