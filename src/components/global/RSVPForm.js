import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class RSVPForm extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.selectHandleChange = this.selectHandleChange.bind(this);

    this.state = {
      firstname: { value: '', isValid: false, validation: null },
      lastname: { value: '', isValid: false, validation: null },
      email: { value: '', isValid: false, validation: null },
      guestname: { value: '', isValid: true, validation: null },
      form: { hidden: false },
    };
  }

  selectHandleChange(e) {

    var value = e.target.value;
    var state = this.state;

    if (value == "Yes") {
      state.form.hidden = true;
      this.setState(state);
    }
    else {
      state.form.hidden = false;
      this.setState(state);
    }
  }

  handleChange(e) {

    var state = this.state;
    var name = e.target.name;

    state[name].value = e.target.value;
    this.setState(state);

    switch (name) {
      case "firstname":
        if (state[name].value.length >= 1) {
          state[name].isValid = true;
          state[name].validation = 'success';
          this.setState(state);
        } else {
          state[name].isValid = false;
          state[name].validation = 'error';
          this.setState(state);
        };
        break;
      case "lastname":
        if (state[name].value.length >= 1) {
          state[name].isValid = true;
          state[name].validation = 'success';
          this.setState(state);
        } else {
          state[name].isValid = false;
          state[name].validation = 'error';
          this.setState(state);
        };
        break;
      case "email":
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state[name].value)) {
          state[name].isValid = true;
          state[name].validation = 'success';
          this.setState(state);
        } else {
          state[name].isValid = false;
          state[name].validation = 'error';
          this.setState(state);
        };
        break;
      case "guestname":
        if (state[name].value.length >= 1) {
          state[name].isValid = true;
          state[name].validation = 'success';
          this.setState(state);
        } else {
          state[name].isValid = false;
          state[name].validation = 'error';
          this.setState(state);
        };
        break;
      default:
        return;
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.formIsValid()) {
      document.getElementById("RSVP").submit();
    }
  }

  formIsValid = () => {
    var state = this.state;

    if (!state.firstname.isValid) {
      state.firstname.validation = 'error';
      this.setState(state);
      return false;
    }
    if (!state.lastname.isValid) {
      state.lastname.validation = 'error';
      this.setState(state);
      return false;
    }
    if (!state.email.isValid) {
      state.email.validation = 'error';
      this.setState(state);
      return false;
    }
    return true;
  }

  render() {

    return (

      <form id="RSVP" action="https://formspree.io/emily@emilyvonlossow.com" method="POST" onSubmit={this.onSubmit}>
        <FormGroup
          validationState={this.state.firstname.validation}
        >
          <FormControl
            type="text"
            name="firstname"
            value={this.state.firstname.value}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          validationState={this.state.lastname.validation}
        >
          <FormControl
            type="text"
            name="lastname"
            value={this.state.lastname.value}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          validationState={this.state.email.validation}
        >
          <FormControl
            type="text"
            name="email"
            value={this.state.email.value}
            placeholder="Email Address"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup>
          <FormControl componentClass="select" defaultValue="default" onChange={this.selectHandleChange}>
            <option value="default" disabled>Do you have an additional guest invite?</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </FormControl>
        </FormGroup>

        <FormGroup
          style={!this.state.form.hidden ? { display: 'none' } : { display: 'block' }}
          validationState={this.state.guestname.validation}
        >
          <FormControl
            type="text"
            name="guestname"
            value={this.state.guestname.value}
            placeholder="Additional Guest Full Name"
            onChange={this.handleChange}

          />
          <FormControl.Feedback />
        </FormGroup>
        <p className="modal-rsvp">Please RSVP by August 1st, 2018.</p>
        <Button bsStyle="primary" className="modal-button" type="submit">Confirm RSVP</Button>
      </form>
    );
  }
}

export default RSVPForm;

