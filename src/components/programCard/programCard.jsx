import React, { PureComponent } from "react";
import "./programCard.css";

class ProgramCard extends PureComponent {
  dictionary = {
    left: [
      {
        title: "explication python",
        elements: [
          "Histoire",
          "Futurs perspectives du langage",
          "Fonctionnement du core"
        ]
      },
      {
        title: "versions python",
        elements: [
          "Support des versions",
          "Différences v2/v3",
          "Exemples des différences",
          "Comment migrer ses outils"
        ]
      },
      {
        title: "environnement",
        elements: [
          "Virtualisation",
          "IDE",
          "Configuration de son poste de travail"
        ]
      },
      {
        title: "les bases du dev",
        elements: [
          "Serveur python synchrone et asychrone",
          "Architecture monolithique/webservice",
          "Découpage Front / Back",
          "REST / SOAP / ..."
        ]
      },
      {
        title: "les bases en python",
        elements: [
          "Ligne directrice python",
          "Normes de codage",
          "Librairies de vérification",
          "Typage",
          "Variables primitives",
          "Variables complexes",
          "Test conditionnel / boucle",
          "POO",
          "CLI / WEB"
        ]
      }
    ],
    right: [
      {
        title: "configurer un environnement",
        elements: []
      },
      {
        title: "faire son premier script",
        elements: []
      },
      {
        title: "tests unitaires",
        elements: ["Pytest", "Intégrer avec Gitlab", "Intégrer avec Tox"]
      },
      {
        title: "trucs et astuces",
        elements: []
      },
      {
        title: "python avancé",
        elements: ["Yield", "Decorator"]
      },
      {
        title: "faire son package",
        elements: ["Sémantique", "Librairies", "Publier son code"]
      },
      {
        title: "les frameworks web",
        elements: ["Flask", "Django"]
      },
      {
        title: "devops avec gitlab",
        elements: [
          "Configurer son projet",
          "Gestion des branches",
          "Utiliser les variables Gitlab",
          "Token Gitlab",
          "CI / CD",
          "Ansible"
        ]
      }
    ]
  };

  render() {
    return (
      <div className="programCard">
        <div className="grid grid--justify-center programCard__grid">
          <div className="grid__column padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="programCard__left">
              <div className="programCard__title padding-xs">programme</div>
              {this.dictionary.left.map(item => (
                <div key={item.title}>
                  <div className="programCard_header">
                    <label
                      htmlFor={item.title}
                      className="programCard__subTitle margin-nulled"
                    >
                      {item.title}
                    </label>
                    <input
                      className="programCard__checkbox control__checkbox"
                      type="checkbox"
                      checked={this.props.choices.includes(item.title)}
                      id={item.title}
                      onChange={() => this.props.handleCheck(item.title)}
                    />
                  </div>
                  <ul className="list list--unstyled">
                    {item.elements.map(el => (
                      <li
                        className="programCard__elements padding-xs padding-nulled"
                        key={el}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="grid__column padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="programCard__right">
              {this.dictionary.right.map(item => (
                <div key={item.title}>
                  <div className="programCard_header">
                    <label
                      htmlFor={item.title}
                      className="programCard__subTitle margin-nulled"
                    >
                      {item.title}
                    </label>
                    <input
                      className="programCard__checkbox control__checkbox"
                      type="checkbox"
                      checked={this.props.choices.includes(item.title)}
                      id={item.title}
                      onChange={() => this.props.handleCheck(item.title)}
                    />
                  </div>
                  <ul className="list list--unstyled">
                    {item.elements.map(el => (
                      <li
                        className="programCard__elements padding-xs padding-nulled"
                        key={el}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramCard;
