import React, { Component } from "react";
import "./App.scss";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Program from "containers/program/program";

class App extends Component {
  render() {
    return (
      <div className="container container--fluid">
        <Training />
        <Trainer />
        <Program />
      </div>
    );
  }
}

export default App;
