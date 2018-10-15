import React from "react";
import { Container, Row, Col } from "reactstrap";
import schedule from "./../assets/images/schedule.png";
import venue from "./../assets/images/venue.png";
import attire from "./../assets/images/attire.png";
import rsvp from "./../assets/images/rsvp.png";

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

const EventDetails = () => (
  <Container className="event-details" id="eventDetails">
    <Row center>
      {eventDetails.map((detail, index) => (
        <Col key={index} sm="4" md="6" lg="auto">
          <img src={detail.icon} alt={detail.alt} />
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: detail.heading }}
          />
          <p dangerouslySetInnerHTML={{ __html: detail.paragraph }} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default EventDetails;
