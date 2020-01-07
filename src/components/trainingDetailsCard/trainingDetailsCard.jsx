import React, { PureComponent } from "react";
import "./trainingDetailsCard.css";

class TrainingDetailsCard extends PureComponent {
  render() {
    return (
      <div className="trainingDetailsCard">
        <div className="grid grid--justify-center trainingDetailsCard__grid">
          <div className="grid__column padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="trainingDetailsCard__left">
              <div className="trainingDetailsCard__square trainingDetailsCard__square-lang">
                <div className="trainingDetailsCard__square-title">python</div>
                <div className="trainingDetailsCard__square-content">
                  (Re)découvrez ce langage de programmation qui est très utilisé
                  dans le cadre scientifique compte tenu des outils avancés
                  qu'il dispose. Nous verrons durant cette formation tous les
                  aspects nécessaires à une bonne maitrise de python.
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
          <div className="grid__column padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="trainingDetailsCard__right">
              <div className="trainingDetailsCard__square trainingDetailsCard__square-obj">
                <div className="trainingDetailsCard__square-title">
                  objectifs
                </div>
                <div className="trainingDetailsCard__square-content">
                  <ul>
                    <li>
                      Comprendre et être capable de modifier un code python.
                    </li>
                    <li>Créer une nouvelle application python.</li>
                    <li>
                      Connaitre les outils qui gravitent autour de python.
                    </li>
                    <li>Être capable de comprendre des notions avancés.</li>
                  </ul>
                </div>
              </div>
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
      </div>
    );
  }
}

export default TrainingDetailsCard;
