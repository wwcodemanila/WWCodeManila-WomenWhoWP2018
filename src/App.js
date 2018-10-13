import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import About from "components/About";

const repository =
  "https://docs.google.com/presentation/d/1z3XGsAQzCW66UKmf6ObbgkddTIc2TveFgkHSAaY9lFg/edit#slide=id.g43f5d69b4a_0_8";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <h1 className="display-3">Hello, Women Who Code Manila!</h1>
          <p className="lead">
            Together we'll create the new landing page for{" "}
            <strong>manila.womenwhocode.com</strong>. We'll use{" "}
            <strong>ReactJS</strong> in this activity.
          </p>
          <hr className="my-2" />
          <p>Happy hacking!</p>
          <p className="lead">
            <Button outline color="primary">
              <a href={repository} target="__blank">
                Learn More
              </a>
            </Button>
          </p>
        </Jumbotron>
        <About />
      </React.Fragment>
    );
  }
}

export default App;
