import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import schedule from './../assets/images/schedule.png';
import venue from './../assets/images/venue.png';
import attire from './../assets/images/attire.png';
import rsvp from './../assets/images/rsvp.png';

class EventDetails extends Component {

  render() {
    return (
      <Container className="event-details">
        <Row>
          <Col md="1"></Col>
          <Col md="10">
            <Row>
              <Col>
                <img src={schedule} alt="Calendar with check icon" />
                <h2>
                  SAT Oct 27, 2018
                  <br />
                  12:30 to 6:00PM
                </h2>
              </Col>
              <Col>
                <img src={venue} alt="Map with pin icon" />
                <h2>Zendesk</h2>
                <p>
                  30/F Netpark Building
                  <br />
                  Bonifacio Global City
                </p>
              </Col>
              <Col>
                <img src={attire} alt="Shirt icon" />
                <h2>Bldg. Attire</h2>
                <p>
                  No Shorts, Sando, Slippers,
                  <br />
                  Casual Attire will do
                </p>
              </Col>
              <Col>
                <img src={rsvp} alt="Folded paper icon" />
                <h2>Register & Reserve</h2>
                <p>
                  http://bit.ly/womenwhowordpress
                </p>
              </Col>
            </Row>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    );
  }
}

export default EventDetails;