import React, { PureComponent } from "react";
import "./trainingDetailsCard.css";

class TrainingDetailsCard extends PureComponent {
  render() {
    return (
      <div className="trainingDetailsCard">
        <div className="grid grid--justify-center trainingDetailsCard__grid ">
          <div className="grid__column--12 padding-nulled grid__column--6--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-lang">
              <div className="trainingDetailsCard__square-title">python</div>
              <div className="trainingDetailsCard__square-content">
                (Re)découvrez ce langage de programmation qui est très utilisé
                dans le cadre scientifique compte tenu des outils avancés qu'il
                dispose. Nous verrons durant cette formation tous les aspects
                nécessaires à une bonne maitrise de python.
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--6--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-public">
              <div className="trainingDetailsCard__square-title">Public</div>
              <div className="trainingDetailsCard__square-content">
                <ul>
                  <li>Une équipe de développeurs.</li>
                  <li>Un responsable technique.</li>
                  <li>Une personne en reconversion profesionnelle.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--6--sm grid__column--6--md grid__column--4--lg">
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
              <div className="trainingDetailsCard__square-period-text-4">
                7h / jour
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--6--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-obj">
              <div className="trainingDetailsCard__square-title">objectifs</div>
              <div className="trainingDetailsCard__square-content">
                <ul>
                  <li>
                    Comprendre et être capable de modifier un code python.
                  </li>
                  <li>Créer une nouvelle application python.</li>
                  <li>Connaitre les outils qui gravitent autour de python.</li>
                  <li>Être capable de comprendre des notions avancés.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--6--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-satisfaction">
              <div className="trainingDetailsCard__square-title">
                Satisfaction client
              </div>
              <div className="trainingDetailsCard__square-content">
                <span> 87%</span> de nos clients sont satisfaits par la qualité
                de nos formations.
              </div>
            </div>
          </div>
          <div className="grid__column--12 padding-nulled grid__column--6--sm grid__column--6--md grid__column--4--lg">
            <div className="trainingDetailsCard__square trainingDetailsCard__square-requirements">
              <div className="trainingDetailsCard__square-title">
                pré requis
              </div>
              <div className="trainingDetailsCard__square-content">
                Avoir déjà les bases en développement pas forcément en python.
                Les formations sont à la carte mais entre 1 et 2 ans
                d'expérience est conseillé.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingDetailsCard;
