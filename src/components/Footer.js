import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import zendesk from "../assets/images/zendesk-logo.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import meetup from "../assets/images/meetup.png";
import { Row, Col, Container } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
       <footer className="footer">         
        <Row>
            <Col>
                <p>Thank you for supporting us</p>
                <img src={zendesk} alt="Zendesk Logo" height="42" width="42"/>
            </Col>

            <Col>
              <p>Keep in touch with us</p>
              <p className="primary">wwcodemanila</p>
              <img src={facebook} alt="Zendesk Logo" height="42" width="42"/>
              <img src={twitter} alt="Twitter Logo" height="42" width="42"/>
              <img src={meetup} alt="Zendesk Logo" height="42" width="42"/>
            </Col>
          </Row>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer
