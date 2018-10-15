import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import * as ReactBootstrap from 'react-bootstrap';

const clickableName_rsvp = (<h6>RSVP</h6>);

class RsvpButton extends Component {
    render() {
        return (
          <React.Fragment>
            <ButtonToolbar>
              {/* Standard button */}
              <Button>{clickableName_rsvp}</Button>

              {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
              <Button bsStyle="primary" color="primary">Primary</Button>

              <Button bsStyle="secondary" color="secondary">Secondary</Button>

              {/* Indicates a successful or positive action */}
              <Button bsStyle="success" color="success">Success</Button>

              {/* Contextual button for informational alert messages */}
              <Button bsStyle="info" color="info">Info</Button>

              {/* Indicates caution should be taken with this action */}
              <Button bsStyle="warning" color="warning">Warning</Button>

              {/* Indicates a dangerous or potentially negative action */}
              <Button bsStyle="danger" color="danger">Danger</Button>

              {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
              <Button bsStyle="link" color="link">Link</Button>
            </ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ReactBootstrap.DropdownButton title="Dropdown" id="bg-nested-dropdown">
                <ReactBootstrap.MenuItem eventKey="1">Dropdown link</ReactBootstrap.MenuItem>
                <ReactBootstrap.MenuItem eventKey="2">Dropdown link</ReactBootstrap.MenuItem>
              </ReactBootstrap.DropdownButton>
            </ButtonGroup>
          </React.Fragment>
        );
      }
    }

export default RsvpButton;