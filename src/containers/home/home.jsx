import React, { Component } from "react";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Formation from "containers/formation/formation";
import Header from "components/header/header";
import Footer from "components/footer/footer";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Training />
        <Trainer />
        <Formation />
        <Footer />
      </div>
    );
  }
}
