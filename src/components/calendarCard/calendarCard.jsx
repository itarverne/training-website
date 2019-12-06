import "@lls/react-light-calendar/dist/index.css";
import "./calendarCard.css";
import React, { Component } from "react";
import ReactLightCalendar from "@lls/react-light-calendar";

export default class CalendarCard extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();
    this.state = {
      startDate, // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6) // Today + 6 days
    };
  }

  onChange = (startDate, endDate) => this.setState({ startDate, endDate });

  DAY_LABELS = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
  ];
  MONTH_LABELS = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aûot",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];
  render() {
    return (
      <div className="calendarCard">
        <div className="grid grid--justify-center">
          <div className="grid__column padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="calendarCard__left">
              <ReactLightCalendar
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.onChange}
                range
                monthLabels={this.MONTH_LABELS}
                dayLabels={this.DAY_LABELS}
              />
            </div>
          </div>
          <div className="grid__column padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="calendarCard__right">
              <div className="grid grid--justify-center">
                <div className="grid__column padding-nulled grid__column--11--sm grid__column--8--lg">
                  <div className="calendarCard-formular">
                    <div className="calendarCard-formular__form-block">
                      <label htmtfor="lastname">Nom</label>
                      <input
                        type="text"
                        name="lastname"
                        value={this.props.lastname}
                        onChange={this.props.handleInputChange}
                        placeholder=""
                        id="lastname"
                      />
                    </div>
                    <div className="calendarCard-formular__form-block">
                      <label htmtfor="firstname">Prenom</label>
                      <input
                        type="text"
                        name="firstname"
                        value={this.props.firstname}
                        onChange={this.props.handleInputChange}
                        placeholder=""
                        id="firstname"
                      />
                    </div>
                    <div className="calendarCard-formular__form-block">
                      <label htmtfor="phone">Telephone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={this.props.phone}
                        onChange={this.props.handleInputChange}
                        placeholder=""
                        id="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid__column padding-nulled grid__column--11--sm grid__column--4--lg">
                  <div className="calendarCard__submit-btn">
                    <a href="#/">demander une formation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
