/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import "./trainingCard.css";

class TrainingCard extends PureComponent {
  render() {
    return (
      <div className="card card--feature trainingCard">
        <div className="card__content type-center">
          <div className="card-tiltle-wrapper">
            <h3 className="card__title">{this.props.title}</h3>
          </div>
          <div className="card-content-wrapper">
            <p>{this.props.content}</p>
          </div>
          <a
            href="/"
            className="button button--outlined button--xxs card__button type-center learn-more-btn"
          >
            en savoir plus
          </a>
        </div>
      </div>
    );
  }
}

export default TrainingCard;
