import React, { Component } from "react";
import GroupPicture from "../assets/images/group-picture.png";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl">
              <p class="text-primary">About the Event</p>
              <p>
                Women Who WordPress is happening on October 27, 2018.
                We are now on our second year. Yay! This is open to all
                enthusiasts of WordPress and those who are interested
                to learn more about it. We will be having a track for
                beginner and advanced. This is a collaborative event
                between WordPress User Group Philippines and our
                community.
              </p>
              <p>Special thanks to Zendesk for hosting our Women Who WordPress event.</p>
            </div>
            <div class="col-xl text-center">
              <img src={GroupPicture} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
