import React, { PureComponent } from "react";
import "./backButton.css";

class BackButton extends PureComponent {
  render() {
    return (
      <div className="back-button">
        <a href="https://itarverne.fr/" alt="">
          <span className="chevron-left-icon" />
          itarverne.fr
        </a>
      </div>
    );
  }
}

export default BackButton;
