import React from "react";
import { Row, Col, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faMeetup
} from "@fortawesome/fontawesome-free-brands";
import zendesk from "../assets/images/zendesk.png";

const socialLinks = [
  {
    icon: faFacebook,
    url: "https://www.facebook.com/wwcodemanila/"
  },
  {
    icon: faTwitter,
    url: "https://www.facebook.com/wwcodemanila/"
  },
  {
    icon: faMeetup,
    url: "https://www.meetup.com/Women-Who-Code-Manila/"
  }
];

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row xs="12">
        <Col>
          <p>Thank you for supporting us</p>
          <img src={zendesk} alt="Zendesk Logo" width="75px" />
        </Col>
        <Col xs="12" lg="6">
          <p>
            Keep in touch with us: <span className="primary">wwcodemanila</span>
          </p>
          {socialLinks.map((link, index) => (
            <a href={link.url} key={index} className="icon">
              <FontAwesomeIcon icon={link.icon} size="2x" />
            </a>
          ))}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
