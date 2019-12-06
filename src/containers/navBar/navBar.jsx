import "./navBar.css";
import React, { Component } from "react";

import Logo from "images/logo.png";
import Tel from "images/tel.png";
import MenuButton from "components/menuButton/menuButton";

class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
      currentTab: "training"
    };
  }

  setCurrentTab = name => {
    this.setState({
      currentTab: name
    });
  };

  render() {
    return (
      <div className="navBar">
        <div className="navBar__logo">
          <img src={Logo} alt="" />
        </div>
        <MenuButton
          onClick={e => this.setCurrentTab("training")}
          label="formations"
          active={this.state.currentTab === "training"}
          name="training"
        />
        <MenuButton
          onClick={e => this.setCurrentTab("trainer")}
          label="votre formateur"
          active={this.state.currentTab === "trainer"}
          name="trainer"
        />
        <div className="navBar__phone">
          <img className="tel-logo" src={Tel} alt="" />
          <span>06.44.28.84.72</span>
        </div>
      </div>
    );
  }
}

export default NavBar;
