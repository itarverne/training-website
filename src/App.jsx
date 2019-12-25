import React, { Component } from "react";
import "./App.scss";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Program from "containers/program/program";
import Chat from "components/chat/chat";

class App extends Component {
  render() {
    return (
      <div>
        <Training />
        <Trainer />
        <Program />
        <Chat />
      </div>
    );
  }
}

export default App;
