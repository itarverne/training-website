import React, { PureComponent } from "react";
import "./training.css";
import TextContainer from "components/textContainer/textContainer";
import TrainingCard from "components/trainingCard/trainingCard";
import BackButton from "components/backButton/backButton";
import Logo from "images/logo.png";
import datadock from "images/datadock.jpg";

class Training extends PureComponent {
  python =
    "Python est devenu le langage le plus populaire auprès des développeurs, au travers d'une richesse de librairies et une simplicité d'utilisation. Faites-vous accompagner pour apprendre à programmer en python et maitriser ce langage de programmation.";
  django =
    "Vous avez quelques bases en python et vous avez envie de réaliser des applications web, le framework Django est un des outils les plus utilisés. Suivez notre formation django et participez à notre atelier pour découvrir la réalisation d'application web python.";
  textBloc =
    "ITARVERNE est votre partenaire idéal pour vous accompagner dans la formation de vos équipes de développeurs. Notre expertise dans le domaine du développement web et plus particulièrement le python, est mis à votre service afin de réaliser des formations / cours Python sur mesure. Que ce soit pour la découverte du framework python Django ou encore un perfectionnement dans l'usage du langage python.";
  docker =
    "Docker est utilisé avec énormément de technologies, et vous pourriez avoir besoin de créer des environnements de manière isolée pour vos applications. Suivez notre programme pour apprendre à mettre en place Docker dans vos projets.";
  react = "React, un framework UI, développé par facebook ne cesse de montrer ses capacités et les entreprises l'ont bien compris en intégrant cette technologie dans leur application."
  git = "GIT est le gestionnaire de version de code le plus utilisé, mais il regorge de nombreuses fonctionnalités méconnues des développeurs. Il est indispensable de comprendre ses concepts surtout dans un travail collaboratif."
    datadock = "Depuis cette année votre centre de formation est référencé en tant qu'organisme de formation auprès de Datadock pour sa démarche qualité. Cet engagenemnt nous permet d'être référencé auprès de votre OPCO pour envisager un financement par celui-ci."
  covid19 = "IMPORTANT : suite à la crise sanitaire le gouvernement a assouppli les conditions de subvention formation FNE-Formation. Pour une prise en charge totale de vos frais de formation (sous réserve de validation par la Direccte) n'hésitez pas à prendre contact via notre formulaire pour demander votre devis."
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
              <TrainingCard title="django" content={this.django} available={false}/>
            </div>
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="docker" content={this.docker} />
            </div>
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="react" content={this.react} />
            </div>
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="git" content={this.git} />
            </div>
          </div>
          <div className="grid grid--justify-center training__grid">
            <img src={datadock} alt="ITARVERNE est référencé auprès de votre OPCO grâce à la démarche qualité Datadock" />
          </div>
          <div className="grid grid--justify-center">
            <TextContainer text={this.datadock} />
            <TextContainer text={this.covid19} />
          </div>
        </div>
      </section>
    );
  }
}

export default Training;
