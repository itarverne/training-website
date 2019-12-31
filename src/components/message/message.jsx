import "./message.scss";
import React, { PureComponent } from "react";
import { FormattedDate } from "react-intl";

class ChatMessage extends PureComponent {
  render() {
    return (
      <div
        className={`message-box ${this.props.admin && `message-box--right`}`}
      >
        <div className="message-box__avatar">
          <i
            className={`fas fa-user${
              this.props.username === "anonymous" ? `-secret` : ``
            }`}
          />
        </div>
        <div className="chatMessage">
          <div className="chatMessage__content">
            <div className="chatMessage__content-header">
              {this.props.username}

              <span className="message-date">
                <FormattedDate
                  day="2-digit"
                  hour="numeric"
                  minute="numeric"
                  month="numeric"
                  value={this.props.date}
                  year="numeric"
                />
              </span>
            </div>
            <span>{this.props.content}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
