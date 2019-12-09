import React, { Component } from "react";
import "./App.css";
import NavBar from "containers/navBar/navBar";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Program from "containers/program/program";

class App extends Component {
  render() {
    return (
      <div className="container container--fluid">
        <NavBar />
        <div className="scrolling-box">
          <Training />
          <Trainer />
          <Program />
        </div>
      </div>
    );
  }
}

export default App;
