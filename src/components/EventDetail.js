import React from 'react';
import { Col } from 'reactstrap';

const EventDetail = ({icon, alt, heading, paragraph}) => (
  <Col>
    <img src={icon} alt={alt} />
    <h2 dangerouslySetInnerHTML={{__html: heading }}></h2>
    <p dangerouslySetInnerHTML={{__html: paragraph }}></p>
  </Col>
);

export default EventDetail;