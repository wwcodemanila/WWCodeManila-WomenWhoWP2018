import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Footer from "./components/Footer"
import Navigation from "./components/Navigation.js";
import Banner from "./components/Banner.js";
import About from "./components/About";
import EventDetails from './components/EventDetails';

const repository =
  "https://docs.google.com/presentation/d/1z3XGsAQzCW66UKmf6ObbgkddTIc2TveFgkHSAaY9lFg/edit#slide=id.g43f5d69b4a_0_8";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Footer/>
        <Navigation/>
        <Banner/>
        <EventDetails />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
