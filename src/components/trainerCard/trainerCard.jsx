import React, { Component } from "react";
import "./trainerCard.css";

class TrainerCard extends Component {
  render() {
    return (
      <div className="trainerCard">
        <div className="grid grid--justify-center ">
          <div className="grid__column padding-nulled  grid__column--8--sm grid__column--8--md grid__column--4--lg">
            <div className="trainerCard__photo ">
              <span className="trainerCard__trainer-name">david rigaudie</span>
            </div>
          </div>
          <div className="grid__column padding-nulled grid__column--8--sm grid__column--8--md grid__column--8--lg">
            <div className="trainerCard__text">
              <div className="trainerCard__text-left">
                <div className="trainerCard__text-title">Presentation</div>
                <div className="trainerCard__text-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis dicta non aperiam, quia temporibus, vel quaerat
                  officiis iure odit dolorem enim at incidunt quo facere soluta
                  totam, laboriosam sequi et.
                </div>
                <div className="trainerCard__text-title">activites</div>
                <div className="trainerCard__text-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis dicta non aperiam, quia temporibus, vel quaerat
                  officiis iure odit dolorem enim at incidunt quo facere soluta
                  totam, laboriosam sequi et.
                </div>
              </div>
              <div className="trainerCard__text-right">
                <div className="trainerCard__text-title">formations</div>
                <div className="trainerCard__text-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis dicta non aperiam, quia temporibus, vel quaerat
                  officiis iure odit dolorem enim at incidunt quo facere soluta
                  totam, laboriosam sequi et.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainerCard;
