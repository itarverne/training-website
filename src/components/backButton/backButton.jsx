import React, { PureComponent } from "react";
import "./backButton.css";

class BackButton extends PureComponent {
  render() {
    return (
      <div className="back-button">
        <a href="https://itarverne.com/" alt="">
          <i className="fas fa-chevron-left margin-xxs "></i>itarverne.fr
        </a>
      </div>
    );
  }
}

export default BackButton;
