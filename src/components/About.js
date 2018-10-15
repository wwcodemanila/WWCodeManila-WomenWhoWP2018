import React from "react";
import { Col, Row, Container } from "reactstrap";
import groupPicture from "../assets/images/group-picture.png";

const About = () => (
  <Container id="about">
    <Row>
      <Col sm="2" lg="6">
        <p className="lead">
          <strong>About the Event</strong>
        </p>
        <p>
          <strong>Women Who WordPress</strong> is happening on October 27, 2018.
          We are now on our second year. Yay! This is open to all enthusiasts of
          WordPress and those who are interested to learn more about it. We will
          be having a track for beginner and advanced. This is a collaborative
          event between WordPress User Group Philippines and our community.
        </p>
        <p>
          Special thanks to Zendesk for hosting our Women Who WordPress event.
        </p>
      </Col>
      <Col sm="2" lg="6">
        <img
          src={groupPicture}
          alt="Women Who Code Manila Banner"
          width="95%"
        />
      </Col>
    </Row>
  </Container>
);

export default About;
