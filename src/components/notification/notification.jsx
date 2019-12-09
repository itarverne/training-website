import React, { Component } from "react";
import "./notification.css";

class Notification extends Component {
  render() {
    return (
      <div className={`notification-card ${this.props.className}`}>
        {this.props.text}
      </div>
    );
  }
}

export default Notification;
