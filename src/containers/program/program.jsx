import React, { Component } from "react";
import "./program.css";
import TrainingDetailsCard from "components/trainingDetailsCard/trainingDetailsCard";
import ProgramCard from "components/programCard/programCard";
import CalendarCard from "components/calendarCard/calendarCard";

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ["explication python", "versions python"],
      firstname: "",
      lastname: "",
      phone: ""
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
        />
      </section>
    );
  }
}

export default Program;
