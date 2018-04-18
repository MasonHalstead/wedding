import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Modal, Button, NavItem } from 'react-bootstrap';
import RSVPForm from './RSVPForm';

class RSVPModal extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,

    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <React.Fragment>
        <NavItem onClick={this.handleShow}>RSVP</NavItem>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
          backdrop='static'
        >
          <Modal.Header closeButton onClick={this.handleHide}>
            <Modal.Title id="contained-modal-title-lg">
              {this.props.modal.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.modal.subtitle.map((text) =>
              <p key={text.title}>{text.title}</p>
            )}
            <RSVPForm />
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default RSVPModal;
