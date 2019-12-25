import "./message.scss";
import React, { PureComponent } from "react";

class ChatMessage extends PureComponent {
  render() {
    return (
      <div
        className={`message-box ${this.props.admin && `message-box--right`}`}
      >
        <div className="message-box__avatar">
          <i className={`fas fa-user${this.props.admin ? `` : `-secret`}`} />
        </div>
        <div className="chatMessage">
          <div className="chatMessage__content">
            <div className="chatMessage__content-header">
              {this.props.username ? this.props.username : `Anonymous`}

              <span className="message-date">20/12/2019 à 14:38</span>
            </div>
            <span>{this.props.content}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
