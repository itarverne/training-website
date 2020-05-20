import React, { Component } from "react";
import "./trainerCard.css";

import PCEP from "../../images/pcep.png";
import PCAP from "../../images/pcap.png";

class TrainerCard extends Component {
  render() {
    return (
      <div className="trainerCard">
        <div className="grid grid--justify-center ">
          <div className="grid__column grid__column--12 padding-nulled  grid__column--8--sm grid__column--8--md grid__column--4--lg">
            <div className="trainerCard__photo ">
              <span className="trainerCard__trainer-name">david rigaudie</span>
            </div>
          </div>
          <div className="grid__column grid__column--12 padding-nulled grid__column--8--sm grid__column--8--md grid__column--8--lg">
            <div className="trainerCard__text">
              <div className="trainerCard__text-left">
                <div className="trainerCard__text-title">Presentation</div>
                <div className="trainerCard__text-content">
                  Votre formateur possède plus de 13 ans d'expériences dans le
                  développement d'application web. Il a travaillé sur plusieurs
                  langages de programmation et a choisi de se spécialiser en
                  python. Compte tenu de ses expériences variées dans différents
                  domaines d'activités, il sait s'adapter à vos besoins et
                  trouvera la solution adéquate à votre problématique. En plus
                  d'être formateur python, les services docker, l'usage des
                  interfaces REST, l'optimisation pour les navigateurs ou encore
                  la sécurité n'ont plus de secret pour lui.
                </div>
                <div className="trainerCard__text-title">Certifications</div>
                  <div className="trainerCard__text-content type-center">
                    <img src={PCEP} className="trainerCard__certif-img" alt="David RIGAUDIE certifié PCEP - Python Institute"/>
                    <span className="hide-sm">PCEP - Python Institute</span>
                  </div>
                  <div className="trainerCard__text-content type-center">
                    <img src={PCAP} className="trainerCard__certif-img" alt="David RIGAUDIE certifié PCAP - Python Institute"/>
                    <span className="hide-sm">PCAP - Python Institute</span>
                  </div>
              </div>
              {/* <div className="trainerCard__text-right">
                <div className="trainerCard__text-title">formations</div>
                <div className="trainerCard__text-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis dicta non aperiam, quia temporibus, vel quaerat
                  officiis iure odit dolorem enim at incidunt quo facere soluta
                  totam, laboriosam sequi et.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainerCard;
