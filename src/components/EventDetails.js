import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EventDetail from './EventDetail';

import schedule from './../assets/images/schedule.png';
import venue from './../assets/images/venue.png';
import attire from './../assets/images/attire.png';
import rsvp from './../assets/images/rsvp.png';

class EventDetails extends Component {

  createEventDetails = () => {
    const eventDetails = [
      {
        icon: schedule,
        alt: "Calendar with check icon",
        heading: "SAT Oct 27, 2018<br />12:30 to 6:00PM",
        paragraph: ""
      },
      {
        icon: venue,
        alt: "Map with pin icon",
        heading: "Zendesk",
        paragraph: "30/F Netpark Building<br />Bonifacio Global City"
      },
      {
        icon: attire,
        alt: "Shirt icon",
        heading: "Bldg. Attire",
        paragraph: "No Shorts, Sando, Slippers,<br />Casual Attire will do"
      },
      {
        icon: rsvp,
        alt: "Folded paper icon",
        heading: "Register & Reserve",
        paragraph: "http://bit.ly/womenwhowordpress"
      }
    ];

    let output = [];

    for (let i = 0; i < eventDetails.length; i++) {
      let eventDetail = eventDetails[i];
      output.push(<EventDetail icon={eventDetail.icon} alt={eventDetail.alt} heading={eventDetail.heading} paragraph={eventDetail.paragraph} />)
    }

    return output;
  }

  render() {

    return (
      <Container className="event-details">
        <Row>
          <Col md="1"></Col>
          <Col md="10">
            <Row>
              {this.createEventDetails()}
              {/*<EventDetail icon={schedule} alt="Calendar with check icon" heading="SAT Oct 27, 2018<br />12:30 to 6:00PM" paragraph="" />*/}
              {/*<EventDetail icon={venue} alt="Map with pin icon" heading="Zendesk" paragraph="30/F Netpark Building<br />Bonifacio Global City" />*/}
              {/*<EventDetail icon={attire} alt="Shirt icon" heading="Bldg. Attire" paragraph="No Shorts, Sando, Slippers,<br />Casual Attire will do" />*/}
              {/*<EventDetail icon={rsvp} alt="Folded paper icon" heading="Register & Reserve" paragraph="http://bit.ly/womenwhowordpress" />*/}
            </Row>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    );
  }
}

export default EventDetails;