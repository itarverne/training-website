import React, { Component } from "react";
import "./programContent.css";
import TrainingDetailsCard from "components/trainingDetailsCard/trainingDetailsCard";
import ProgramCard from "components/programCard/programCard";
import CalendarCard from "components/calendarCard/calendarCard";
import Notification from "components/notification/notification";
import { Link } from "react-router-dom";
import Utils from "../../utils/helper";

class ProgramContent extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();

    this.state = {
      choices: [0, 1],
      firstname: "",
      lastname: "",
      phone: "",
      startDate, // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6), // Today + 6 days
      isEmailSent: false,
      hideNotificationAction: false,
      deliveryFailure: false,
      isFormInvalid: false,
      sending: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCheck = key => {
    if (this.state.choices.includes(key)) {
      this.setState({
        choices: this.state.choices.filter(e => e !== key)
      });
    } else {
      this.setState({
        choices: [...this.state.choices, key]
      });
    }
  };

  handleInputChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  handleRequest = () => {
    if (!this.state.lastname || !this.state.firstname || !this.state.phone) {
      // Reset running timeout & notif state
      this.resetNotification();

      // Run new notif
      this.setState({
        isFormInvalid: true
      });

      this.hideNotification();
    } else if (!this.state.sending) {
      this.setState({
        sending: true
      });
      const templateId = process.env.REACT_APP_EMAILJS_TEMP_ID;
      const sDate = new Date(this.state.startDate);
      const eDate = new Date(this.state.endDate);

      const userChoices = Utils.getProgTitles(
        this.state.choices,
        this.props.subject
      );
      const templateParams = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        startDate:
          sDate.getDate() +
          "/" +
          parseInt(sDate.getMonth() + 1) +
          "/" +
          sDate.getFullYear(),
        endDate:
          eDate.getDate() +
          "/" +
          parseInt(eDate.getMonth() + 1) +
          "/" +
          eDate.getFullYear(),
        p1: userChoices[0] ? "- " + userChoices[0] : "",
        p2: userChoices[1] ? "- " + userChoices[1] : "",
        p3: userChoices[2] ? "- " + userChoices[2] : "",
        p4: userChoices[3] ? "- " + userChoices[3] : "",
        p5: userChoices[4] ? "- " + userChoices[4] : "",
        p6: userChoices[5] ? "- " + userChoices[5] : "",
        p7: userChoices[6] ? "- " + userChoices[6] : "",
        p8: userChoices[7] ? "- " + userChoices[7] : "",
        p9: userChoices[8] ? "- " + userChoices[8] : "",
        p10: userChoices[9] ? "- " + userChoices[9] : "",
        p11: userChoices[10] ? "- " + userChoices[10] : "",
        p12: userChoices[11] ? "- " + userChoices[11] : "",
        p13: userChoices[12] ? "- " + userChoices[12] : ""
      };

      this.sendFeedback(templateId, templateParams);
    }
  };

  handleDates = (startDate, endDate) => this.setState({ startDate, endDate });

  resetNotification = () => {
    window.clearTimeout(this.hideNotif);
    window.clearTimeout(this.resetNotif);
    this.setState({
      isEmailSent: false,
      deliveryFailure: false,
      isFormInvalid: false,
      hideNotificationAction: false
    });
  };

  hideNotification = () => {
    this.hideNotif = setTimeout(() => {
      this.setState({ hideNotificationAction: true });
    }, 3000);
    this.resetNotif = setTimeout(() => {
      this.setState({
        isEmailSent: false,
        deliveryFailure: false,
        isFormInvalid: false,
        hideNotificationAction: false
      });
    }, 4500);
  };

  initForm = () => {
    this.setState({
      choices: [0, 1],
      firstname: "",
      lastname: "",
      phone: ""
    });
  };

  sendFeedback(templateId, templateParams) {
    window.emailjs
      .send("smtp_server", templateId, templateParams)
      .then(response => {
        this.setState({
          isEmailSent: true,
          sending: false
        });
        this.initForm();
        this.hideNotification();
        console.log("Email successfully sent!", response.status, response.text);
      })
      .catch(err => {
        this.setState({
          deliveryFailure: true,
          sending: false
        });
        this.hideNotification();
        console.error("Failed, email has not been sent !", err);
      });
  }

  render() {
    return (
      <section id="program-content">
        <div className="home-btn">
          <Link to="/">
            <i className="fas fa-home margin-xxs "></i>Accueil
          </Link>
        </div>
        {this.state.isEmailSent && (
          <Notification
            className={`notification-success ${
              this.state.hideNotificationAction ? "slideInLeft" : "slideInRight"
            }`}
            text="Email envoyé"
          />
        )}
        {this.state.deliveryFailure && (
          <Notification
            className={`notification-error ${
              this.state.hideNotificationAction ? "slideInLeft" : "slideInRight"
            }`}
            text="Email non envoyé !"
          />
        )}
        {this.state.isFormInvalid && (
          <Notification
            className={`notification-error ${
              this.state.hideNotificationAction ? "slideInLeft" : "slideInRight"
            }`}
            text="Formulaire non valide"
          />
        )}
        <TrainingDetailsCard
          dictionary={Utils.getProgramDetails(this.props.subject)}
        />
        <ProgramCard
          handleCheck={this.handleCheck}
          choices={this.state.choices}
          dictionary={Utils.getProgram(this.props.subject)}
        />

        <CalendarCard
          handleInputChange={this.handleInputChange}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          onSubmit={this.handleRequest}
          handleDates={this.handleDates}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </section>
    );
  }
}

export default ProgramContent;
