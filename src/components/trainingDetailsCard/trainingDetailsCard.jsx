import React, { PureComponent } from "react";
import "./trainingDetailsCard.css";

class TrainingDetailsCard extends PureComponent {
  render() {
    return (
      <div className="trainingDetailsCard">
        <div className="grid grid--justify-center trainingDetailsCard__grid ">
          <div className="grid__column--12 padding-nulled grid__column--8--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-lang">
              <div className="trainingDetailsCard__square-title">
                {this.props.dictionary.s1.title}
              </div>
              <div className="trainingDetailsCard__square-content">
                {this.props.dictionary.s1.content}
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--8--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-public">
              <div className="trainingDetailsCard__square-title">
                {this.props.dictionary.s2.title}
              </div>
              <div className="trainingDetailsCard__square-content">
                <ul>
                  {this.props.dictionary.s2.content.map(el => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--8--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-period">
              {this.props.dictionary.s3.content.map((el, index) => (
                <div
                  className={`trainingDetailsCard__square-period-text-${index +
                    1}`}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--8--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-obj">
              <div className="trainingDetailsCard__square-title">
                {this.props.dictionary.s4.title}
              </div>
              <div className="trainingDetailsCard__square-content">
                <ul>
                  {this.props.dictionary.s4.content.map(el => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--8--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-satisfaction">
              <div className="trainingDetailsCard__square-title">
                {this.props.dictionary.s5.title}
              </div>
              <div className="trainingDetailsCard__square-content">
                <span> {this.props.dictionary.s5.rate}</span>
                {this.props.dictionary.s5.content}
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--8--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-requirements">
              <div className="trainingDetailsCard__square-title">
                {this.props.dictionary.s6.title}
              </div>
              <div className="trainingDetailsCard__square-content">
                {typeof this.props.dictionary.s6.content === "object"
                  ? this.props.dictionary.s6.content.map(el => <li>{el}</li>)
                  : this.props.dictionary.s6.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingDetailsCard;
