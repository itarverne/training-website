import React, { Component } from "react";
import "./program.css";
import TrainingDetailsCard from "components/trainingDetailsCard/trainingDetailsCard";
import ProgramCard from "components/programCard/programCard";
import CalendarCard from "components/calendarCard/calendarCard";

class Program extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();
    this.state = {
      choices: ["explication python", "versions python"],
      firstname: "",
      lastname: "",
      phone: "",
      startDate, // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6) // Today + 6 days
    };
  }

  handleCheck = title => {
    if (this.state.choices.includes(title)) {
      this.setState({
        choices: this.state.choices.filter(e => e !== title)
      });
    } else {
      this.setState({
        choices: [...this.state.choices, title]
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
    const templateId = "template_ZfP4MZ6W";
    const sDate = new Date(this.state.startDate);
    const eDate = new Date(this.state.endDate);

    this.sendFeedback(templateId, {
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
      p1: this.state.choices[0] ? "- " + this.state.choices[0] : "",
      p2: this.state.choices[1] ? "- " + this.state.choices[1] : "",
      p3: this.state.choices[2] ? "- " + this.state.choices[2] : "",
      p4: this.state.choices[3] ? "- " + this.state.choices[3] : "",
      p5: this.state.choices[4] ? "- " + this.state.choices[4] : "",
      p6: this.state.choices[5] ? "- " + this.state.choices[5] : "",
      p7: this.state.choices[6] ? "- " + this.state.choices[6] : "",
      p8: this.state.choices[7] ? "- " + this.state.choices[7] : "",
      p9: this.state.choices[8] ? "- " + this.state.choices[8] : "",
      p10: this.state.choices[9] ? "- " + this.state.choices[9] : "",
      p11: this.state.choices[10] ? "- " + this.state.choices[10] : "",
      p12: this.state.choices[11] ? "- " + this.state.choices[11] : "",
      p13: this.state.choices[12] ? "- " + this.state.choices[12] : ""
    });
  };

  handleDates = (startDate, endDate) => this.setState({ startDate, endDate });

  sendFeedback(templateId, templateParams) {
    window.emailjs.send("gmail", templateId, templateParams).then(
      function(response) {
        console.log("Email successfully sent!", response.status, response.text);
      },
      function(error) {
        console.log("Failed, email has not been sent !", error);
      }
    );
  }

  render() {
    return (
      <section id="program">
        <TrainingDetailsCard />
        <ProgramCard
          handleCheck={this.handleCheck}
          choices={this.state.choices}
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

export default Program;
