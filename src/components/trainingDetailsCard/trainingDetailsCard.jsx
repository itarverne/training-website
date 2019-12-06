import React, { PureComponent } from "react";
import "./trainingDetailsCard.css";

class TrainingDetailsCard extends PureComponent {
  render() {
    return (
      <div className="trainingDetailsCard">
        <div className="grid grid--justify-center trainingDetailsCard__grid">
          <div className="grid__column padding-nulled grid__column--8--sm grid__column--8--md grid__column--5--lg">
            <div className="trainingDetailsCard__left">
              <div className="trainingDetailsCard__square trainingDetailsCard__square-lang">
                <div className="trainingDetailsCard__square-title">python</div>
                <div className="trainingDetailsCard__square-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  voluptas dolores, libero, facere quo eaque omnis non magni
                  eius reiciendis saepe minima nostrum enim nemo tempora
                  quibusdam ut quas nulla?
                </div>
              </div>
              <div className="trainingDetailsCard__square trainingDetailsCard__square-period">
                <div className="trainingDetailsCard__square-period-text-1">
                  5 jours
                </div>
                <div className="trainingDetailsCard__square-period-text-2">
                  du lundi
                </div>
                <div className="trainingDetailsCard__square-period-text-3">
                  au vendredi
                </div>
              </div>
            </div>
          </div>
          <div className="grid__column padding-nulled grid__column--8--sm grid__column--8--md grid__column--5--lg">
            <div className="trainingDetailsCard__right">
              <div className="trainingDetailsCard__square trainingDetailsCard__square-obj">
                <div className="trainingDetailsCard__square-title">
                  objectifs
                </div>
                <div className="trainingDetailsCard__square-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  voluptas dolores, libero, facere quo eaque omnis non magni
                  eius reiciendis saepe minima nostrum enim nemo tempora
                </div>
              </div>
              <div className="trainingDetailsCard__square trainingDetailsCard__square-requirements">
                <div className="trainingDetailsCard__square-title">
                  pré requis
                </div>
                <div className="trainingDetailsCard__square-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  voluptas dolores, libero, facere quo eaque omnis non magni
                  eius reiciendis saepe minima nostrum enim nemo tempora
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingDetailsCard;
