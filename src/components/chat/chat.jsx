/* eslint-disable jsx-a11y/anchor-is-valid */
import "./chat.scss";
import { Bounce, Fade } from "react-reveal";
import React, { Component } from "react";
import Message from "components/message/message";
import _ld from "lodash";
import io from "socket.io-client";

const ENDPOINT = process.env.REACT_APP_CHAT_API;
let socket = io(ENDPOINT);

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatIsOpen: false,
      messages: [
        {
          id: 0,
          content: "Bonjour, comment puis-je vous aider ?",
          username: `Support`,
          admin: true,
          date: new Date().toString()
        }
      ],
      inputValue: ``,
      chatNotification: false
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.scrollToBottom();

    const userId = this.getUserId();

    socket.emit("join", { userId }, () => {
      console.log("channel joinned");
    });

    socket.on(`kb_user_conversation`, conv => {
      if (conv.result) {
        this.getUserConversation(conv.result.messages);
      }
    });

    this.getNotification();

    socket.on(`support_message`, msg => {
      if (!this.state.chatIsOpen) {
        this.setState({
          chatNotification: true
        });
        localStorage.unReadMessage = true;
      }
      console.log("support msg received");
      this.setState(prevState => ({
        messages: [
          ...prevState.messages,
          {
            content: msg.content,
            username: `Support`,
            admin: true,
            date: msg.date,
            id: msg.id
          }
        ]
      }));
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    this._isMounted = false;
    socket.emit(`disconnect`);
    socket.off();
  }

  _isMounted = true;

  getUserConversation = convMessages => {
    /*
     * There is an existing conversation
     * Drop 2 first element (meta & join event)
     */

    const conversationMessages = _ld.dropRight(convMessages, 2);

    const cleanMessages = _ld.map(conversationMessages, item => {
      const isAdmin =
        item.msg.sender.username !== process.env.REACT_APP_KB_BOT_NAME;
      if (item.msg.content.type !== `text`) {
        return null;
      }
      return {
        id: item.msg.id,
        content: item.msg.content.text.body,
        date: item.msg.sent_at_ms,
        username: isAdmin ? "Support" : this.props.username,
        admin: isAdmin,
        unread: item.msg.unread
      };
    });

    // Remove null item

    cleanMessages.forEach(item => {
      if (item === null) {
        const index = cleanMessages.indexOf(item);
        if (index > -1) {
          cleanMessages.splice(index, 1);
        }
      }
    });
    if (this._isMounted) {
      this.setState(prevState => ({
        messages: prevState.messages.concat(_ld.reverse(cleanMessages))
      }));
    }
  };

  getUserId = () => {
    if (document.cookie.indexOf("userId") === -1) {
      const newUserId = Math.floor(Math.random() * 1000000000);
      document.cookie = `userId=${newUserId}; expires=Fri, 3 Aug 2100 20:47:11 UTC; path=/`;
    }
    // return this.getCookie("userId");
    return "u_tayson";
  };

  getNotification = () => {
    if (localStorage.unReadMessage === `true`) {
      this.setState({
        chatNotification: true
      });
    }
  };

  getCookie = name => {
    let cookie = {};
    document.cookie.split(";").forEach(el => {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    return cookie[name];
  };

  scrollToBottom() {
    if (this.messagesEnd) {
      const { scrollHeight } = this.messagesEnd;

      const height = this.messagesEnd.clientHeight;
      const maxScrollTop = scrollHeight - height;
      this.messagesEnd.scrollTop = maxScrollTop > 0 && maxScrollTop;
    }
  }

  handleOpenChat = () => {
    localStorage.unReadMessage = false;
    this.setState(prevState => ({
      chatIsOpen: !prevState.chatIsOpen,
      chatNotification: false
    }));
  };

  handleMessage = e => {
    if (e) e.preventDefault();
    if (this.state.inputValue) {
      const message = {
        content: this.input.value,
        date: new Date().toString(),
        username: this.props.username,
        id: Math.floor(Math.random() * 1000000000)
      };
      this.setState(prevSatate => ({
        messages: [...prevSatate.messages, message],
        inputValue: ``
      }));
      socket.emit(`message`, {
        channel: this.getUserId(),
        message: message.content
      });
    }
  };

  handleInputValue = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div className="chat">
        {this.state.chatIsOpen && (
          <Bounce bottom>
            <div className="chat__box">
              <div className="chat__input-container">
                <form onSubmit={this.handleMessage}>
                  <input
                    className="chat__input"
                    placeholder="Écrivez votre message..."
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputValue}
                    ref={element => {
                      this.input = element;
                    }}
                  />
                </form>
              </div>
              <div
                className="chat__msgs-box"
                ref={el => {
                  this.messagesEnd = el;
                }}
              >
                {this.state.messages.map(msg => (
                  <Fade big key={msg.id}>
                    <Message
                      admin={msg.admin ? msg.admin : false}
                      content={msg.content}
                      date={msg.date}
                      username={msg.username}
                    />
                  </Fade>
                ))}
              </div>
              <div className="chat__header">
                <a
                  className="close icon chat__close-btn"
                  onClick={this.handleOpenChat}
                >
                  x
                </a>
                <div className="chat__identity">
                  <div className="chat__user-icon">
                    <i
                      className={`fas fa-user${
                        this.props.username === "anonymous" ? `-secret` : ``
                      }`}
                    />
                  </div>
                  <span className="chat__username">{this.props.username}</span>
                </div>
              </div>
            </div>
          </Bounce>
        )}
        <div className="chat__btn-container">
          {this.state.chatNotification && (
            <span className="chat__btn--ntofication" />
          )}
          <a className="chat__btn" role="button" onClick={this.handleOpenChat}>
            <i className="chat__icon  fas fa-comments" />
          </a>
        </div>
      </div>
    );
  }
}
export default Chat;
