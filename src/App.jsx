import React, { Component } from "react";
import "./App.scss";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Program from "containers/program/program";
import Chat from "components/chat/chat";
import Header from "components/header/header";
import Footer from "components/footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Training />
        <Trainer />
        <Program />
        <Footer />
        <Chat username="anonymous" />
      </div>
    );
  }
}

export default App;
