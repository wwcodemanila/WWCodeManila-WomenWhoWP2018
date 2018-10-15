import React, { Component } from "react";
import Navigation from "./components/Navigation.js";
import Banner from "./components/Banner.js";
import About from "./components/About";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Banner />
        <EventDetails />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
