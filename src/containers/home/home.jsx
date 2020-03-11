import React, { Component } from "react";
import Training from "containers/training/training";
import Trainer from "containers/trainer/trainer";
import Program from "containers/program/program";
import Header from "components/header/header";
import Footer from "components/footer/footer";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Training />
        <Trainer />
        <Program />
        <Footer />
      </div>
    );
  }
}
