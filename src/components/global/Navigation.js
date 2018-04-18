import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import RSVPModal from './RSVPModal';

function Navigation(props) {

  const navigationLinks = (
    <Nav pullRight>
      {props.navigation.links.map((links) =>
        <React.Fragment key={links.title}>
          {
            !links.modal

              ? (
                <IndexLinkContainer to={links.href}>
                  <NavItem>
                    {links.title}
                  </NavItem>
                </IndexLinkContainer>
              )

              : <RSVPModal modal={props.modal.RSVP} />
          }
        </React.Fragment>
      )}
    </Nav>
  );


  return (
    <Navbar bsStyle="inverse" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={props.navigation.brand.href}>{props.navigation.brand.title}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {navigationLinks}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
