import React, { Component } from 'react';
import schedule from './../assets/images/schedule.png';
import venue from './../assets/images/venue.png';
import attire from './../assets/images/attire.png';
import rsvp from './../assets/images/rsvp.png';

class EventDetails extends Component {

  render() {
    return (
      <div className="event-details">
        <img src={schedule} alt="Schedule: October 17, 2018 from 12:30 to 6:00PM" />
        <img src={venue} alt="Venue: Zendesk, 30/F Netpark Building Bonifacio Global City" />
        <img src={attire} alt="Building Attire: No Shorts, Sando, Slippers. Casual Attire will do" />
        <img src={rsvp} alt="Register & Reserve at http://bit.ly/womenwhowordpress" />
      </div>
    );
  }
}

export default EventDetails;