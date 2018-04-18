import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Flexbox from 'flexbox-react';

const HomeStory = (props) => {

  return (
    <Row className="show-grid">
        <div className="text-center">
        <h2>Our Story</h2>
        <div className="fa-2x">
        <span class="fa-layers fa-fw">
        <i class="fas fa-circle" ></i>
        <i class="fa-inverse fas fa-heart" data-fa-transform="shrink-6"></i>
      </span>
        </div>
        </div>
        <Flexbox flexDirection="row" justifyContent="space-between">
        <div>
            <p>Bride</p>
            <h3>Emily von Lossow</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <p>Groom</p>
            <h3>Mason Halstead</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </Flexbox>
    </Row>
  );
};

export default HomeStory;
