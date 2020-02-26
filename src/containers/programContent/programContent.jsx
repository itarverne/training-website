import React, { Component } from "react";
import "./programContent.css";
import TrainingDetailsCard from "components/trainingDetailsCard/trainingDetailsCard";
import ProgramCard from "components/programCard/programCard";
import CalendarCard from "components/calendarCard/calendarCard";
import Notification from "components/notification/notification";
import { Link } from "react-router-dom";

class ProgramContent extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();
    this.state = {
      choices:
        this.props.subject === "python"
          ? ["explications sur le langage python", "versions python"]
          : ["explications sur docker", "environnement"],
      firstname: "",
      lastname: "",
      phone: "",
      startDate, // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6), // Today + 6 days
      isEmailSent: false,
      hideNotificationAction: false,
      deliveryFailure: false,
      isFormInvalid: false,
      sending: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  pythonDic = {
    left: [
      {
        title: "explications sur le langage python",
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
        title: "les bases en programmation python",
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

  dockerDic = {
    left: [
      {
        title: "explications sur docker",
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
        title: "les bases en programmation python",
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

  progromDetailsDic = {
    s1: {
      title: "python",
      content:
        "(Re)découvrez ce langage de programmation qui est très utilisé dans le cadre scientifique compte tenu des outils avancés qu'il dispose. Nous verrons durant cette formation tous les aspects nécessaires à une bonne maitrise du langage python."
    },
    s2: {
      title: "Public",
      content: [
        "Une équipe de développeurs.",
        "Un responsable technique.",
        "Une personne en reconversion profesionnelle."
      ]
    },
    s3: {
      title: "",
      content: ["5 jours", "du lundi", "au vendredi", "7h / jour"]
    },
    s4: {
      title: "objectifs",
      content: [
        "Comprendre et être capable de modifier un code python.",
        "Apprendre à créer une application python.",
        "Connaitre les outils qui gravitent autour du langage python.",
        "Comprendre des notions avancés de python."
      ]
    },
    s5: {
      title: "Satisfaction client",
      rate: "87%",
      content:
        "de nos clients sont satisfaits par la qualité de nos formations python."
    },
    s6: {
      title: "pré requis",
      content:
        "Avoir déjà les bases en développement python ou dans un autre langage. Les formations sont à la carte mais entre 1 et 2 ans d'expérience est conseillé."
    }
  };
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

  handleRequest = () => {
    if (!this.state.lastname || !this.state.firstname || !this.state.phone) {
      // Reset running timeout & notif state
      this.resetNotification();

      // Run new notif
      this.setState({
        isFormInvalid: true
      });

      this.hideNotification();
    } else if (!this.state.sending) {
      this.setState({
        sending: true
      });
      const templateId = process.env.REACT_APP_EMAILJS_TEMP_ID;
      const sDate = new Date(this.state.startDate);
      const eDate = new Date(this.state.endDate);

      this.sendFeedback(templateId, {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        startDate:
          sDate.getDate() +
          "/" +
          parseInt(sDate.getMonth() + 1) +
          "/" +
          sDate.getFullYear(),
        endDate:
          eDate.getDate() +
          "/" +
          parseInt(eDate.getMonth() + 1) +
          "/" +
          eDate.getFullYear(),
        p1: this.state.choices[0] ? "- " + this.state.choices[0] : "",
        p2: this.state.choices[1] ? "- " + this.state.choices[1] : "",
        p3: this.state.choices[2] ? "- " + this.state.choices[2] : "",
        p4: this.state.choices[3] ? "- " + this.state.choices[3] : "",
        p5: this.state.choices[4] ? "- " + this.state.choices[4] : "",
        p6: this.state.choices[5] ? "- " + this.state.choices[5] : "",
        p7: this.state.choices[6] ? "- " + this.state.choices[6] : "",
        p8: this.state.choices[7] ? "- " + this.state.choices[7] : "",
        p9: this.state.choices[8] ? "- " + this.state.choices[8] : "",
        p10: this.state.choices[9] ? "- " + this.state.choices[9] : "",
        p11: this.state.choices[10] ? "- " + this.state.choices[10] : "",
        p12: this.state.choices[11] ? "- " + this.state.choices[11] : "",
        p13: this.state.choices[12] ? "- " + this.state.choices[12] : ""
      });
    }
  };

  handleDates = (startDate, endDate) => this.setState({ startDate, endDate });

  resetNotification = () => {
    window.clearTimeout(this.hideNotif);
    window.clearTimeout(this.resetNotif);
    this.setState({
      isEmailSent: false,
      deliveryFailure: false,
      isFormInvalid: false,
      hideNotificationAction: false
    });
  };

  hideNotification = () => {
    this.hideNotif = setTimeout(() => {
      this.setState({ hideNotificationAction: true });
    }, 3000);
    this.resetNotif = setTimeout(() => {
      this.setState({
        isEmailSent: false,
        deliveryFailure: false,
        isFormInvalid: false,
        hideNotificationAction: false
      });
    }, 4500);
  };

  initForm = () => {
    this.setState({
      choices: ["explication python", "versions python"],
      firstname: "",
      lastname: "",
      phone: ""
    });
  };

  sendFeedback(templateId, templateParams) {
    window.emailjs
      .send("smtp_server", templateId, templateParams)
      .then(response => {
        this.setState({
          isEmailSent: true,
          sending: false
        });
        this.initForm();
        this.hideNotification();
        console.log("Email successfully sent!", response.status, response.text);
      })
      .catch(err => {
        this.setState({
          deliveryFailure: true,
          sending: false
        });
        this.hideNotification();
        console.error("Failed, email has not been sent !", err);
      });
  }

  render() {
    return (
      <section id="program-content">
        <div className="home-btn">
          <Link to="/">
            <i className="fas fa-home margin-xxs "></i>Accueil
          </Link>
        </div>
        {this.state.isEmailSent && (
          <Notification
            className={`notification-success ${
              this.state.hideNotificationAction ? "slideInLeft" : "slideInRight"
            }`}
            text="Email envoyé"
          />
        )}
        {this.state.deliveryFailure && (
          <Notification
            className={`notification-error ${
              this.state.hideNotificationAction ? "slideInLeft" : "slideInRight"
            }`}
            text="Email non envoyé !"
          />
        )}
        {this.state.isFormInvalid && (
          <Notification
            className={`notification-error ${
              this.state.hideNotificationAction ? "slideInLeft" : "slideInRight"
            }`}
            text="Formulaire non valide"
          />
        )}
        <TrainingDetailsCard dictionary={this.progromDetailsDic} />
        <ProgramCard
          handleCheck={this.handleCheck}
          choices={this.state.choices}
          dictionary={
            this.props.subject === "python" ? this.pythonDic : this.dockerDic
          }
        />
        <CalendarCard
          handleInputChange={this.handleInputChange}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          onSubmit={this.handleRequest}
          handleDates={this.handleDates}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </section>
    );
  }
}

export default ProgramContent;
