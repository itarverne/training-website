import "./menuButton.css";
import React, { PureComponent } from "react";

class MenuButton extends PureComponent {
  render() {
    return (
      <div
        className={`menu-button ${
          this.props.active ? "menu-button--active" : ""
        }`}
      >
        <a href={`#${this.props.name}`} onClick={this.props.onClick}>
          {this.props.label}
        </a>
      </div>
    );
  }
}

export default MenuButton;
