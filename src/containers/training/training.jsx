import React, { PureComponent } from "react";
import "./training.css";
import TextContainer from "components/textContainer/textContainer";
import TrainingCard from "components/trainingCard/trainingCard";
import BackButton from "components/backButton/backButton";
import Logo from "images/logo.png";

class Training extends PureComponent {
  python =
    "Python est devenu le langage le plus populaire auprès des développeurs, au travers d'une richesse de librairies et une simplicité d'utilisation. Faites-vous accompagner pour apprendre à programmer en python et maitriser ce langage de programmation.";
  django =
    "Vous avez quelques bases en python et vous avez envie de réaliser des applications web, le framework Django est un des outils les plus utilisés. Suivez notre formation django et participez à notre atelier pour découvrir la réalisation d'application web python.";
  textBloc =
    "ITARVERNE est votre partenaire idéal pour vous accompagner dans la formation de vos équipes de développeurs. Notre expertise dans le domaine du développement web et plus particulièrement le python, est mis à votre service afin de réaliser des formations / cours Python sur mesure. Que ce soit pour la découverte du framework python Django ou encore un perfectionnement dans l'usage du langage python.";
  render() {
    return (
      <section id="training" className="content">
        <img
          src={Logo}
          className="hide-gt-sm activities__logo padding-xxs"
          alt="ITArverne"
        />
        <a
          href="#body"
          className="nav-button-open"
          aria-label="open navigation"
        >
          {" "}
        </a>
        <a href="/#" className="nav-button-close" aria-label="close navigation">
          {" "}
        </a>
        <div className="training__content">
          <BackButton />
          <TextContainer text={this.textBloc} />
          <div className="grid grid--justify-center training__grid">
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="python" content={this.python} />
            </div>
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="django" content={this.django} />
            </div>
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="docker" content={this.python} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Training;
