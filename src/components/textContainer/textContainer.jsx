import React, { PureComponent } from "react";
import "./textContainer.css";

class TextContainer extends PureComponent {
  render() {
    return <div className="text-container">{this.props.text}</div>;
  }
}

export default TextContainer;
