import React, { Component } from "react";
import "./App.scss";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Program from "containers/program/program";
import Chat from "components/chat/chat";
import { IntlProvider } from "react-intl";

class App extends Component {
  render() {
    return (
      <IntlProvider locale="en">
        <Training />
        <Trainer />
        <Program />
        <Chat username="anonymous" />
      </IntlProvider>
    );
  }
}

export default App;
