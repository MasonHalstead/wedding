import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


const HomeHeader = (props) => {
  return (
    <Row className="show-grid">
        <Col xs={12}>
            <div>
                <h1>{ props.header.title }<small>Subtext for header</small></h1>
            </div>
        </Col>
    </Row>
  );
};

export default HomeHeader;