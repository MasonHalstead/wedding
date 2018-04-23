import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import WelcomeImage from '../../images/welcome-image.jpg';
import ParkingImage from '../../images/directions.jpg';
import Flexbox from 'flexbox-react';

const HomeWelcome = (props) => {
  return (
    <React.Fragment>
        <Flexbox className="component-container welcome-flex">
        <div >
            <Image className="welcome-image" src={WelcomeImage}/>
        </div>
        <div className="welcome-container">
          <h2>{ props.welcome.title }</h2>
          {props.welcome.text.map((welcome) =>
            <p key={welcome.text} dangerouslySetInnerHTML={{__html: welcome.text}}>

            </p>
          )}
        </div>
        </Flexbox>
    </React.Fragment>
  );
};

export default HomeWelcome;
