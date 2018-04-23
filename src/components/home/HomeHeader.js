import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Row } from 'react-bootstrap';
import RSVPModal from '../global/RSVPModal';
import HeaderImage from '../../images/landing-banner.jpg';
import HeaderImageSmall from '../../images/landing-banner-sm.jpg';

const HomeHeader = (props) => {
  const headerTitle = (
    <h1>
      {props.header.title.map((header) =>
        <React.Fragment key={header.title}>
          <span>
            {header.title}
          </span>
          <br/>
        </React.Fragment>
      )}
      <small>{ props.header.subtitle }</small>
    </h1>
  );

  return (
    <div className="header-container">
    <Image className="header-image-full" src={HeaderImage} responsive/>
    <Image className="header-image-small" src={HeaderImageSmall} responsive/>
      <div className="header-box text-left">
        { headerTitle }
        <RSVPModal modal={props.modal.RSVP} button={true} />
      </div>
    </div>
  );
};

export default HomeHeader;
