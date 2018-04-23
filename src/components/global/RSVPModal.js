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
      button: this.props.button

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
      { this.state.button
        ?
        <Button bsStyle="primary" onClick={this.handleShow}>Make Sure to RSVP</Button>
        :
        <NavItem onClick={this.handleShow}>RSVP</NavItem>
      }
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
          backdrop='static'
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-lg" className="text-center">
              <p className="rsvp-title">{this.props.modal.title}</p>
              {this.props.modal.subtitle.map((text) =>
                <p key={text.title}>{text.title}</p>
              )}
            </Modal.Title>
            <span className="modal-close" onClick={this.handleHide}>
            <i className="fas fa-times"></i>
            </span>
          </Modal.Header>
          <Modal.Body>
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
