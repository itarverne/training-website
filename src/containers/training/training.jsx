import React, { PureComponent } from "react";
import "./training.css";
import TextContainer from "components/textContainer/textContainer";
import TrainingCard from "components/trainingCard/trainingCard";
import BackButton from "components/backButton/backButton";
import Logo from "images/logo.png";

class Training extends PureComponent {
  cardText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla ut, quae accusamus itaque nam vitae quisquam quasi explicabo enim. Autem labore aspernatur, a blanditiis neque unde dignissimos soluta? Quis.";
  textBloc =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto, eligendi ipsa nesciunt quibusdam sit eum excepturi eaque laboriosam corrupti officia, libero mollitia consequuntur doloremque ab laborum vel maiores quaerat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto, eligendi ipsa nesciunt quibusdam sit eum excepturi eaque laboriosam corrupti officia, libero mollitia consequuntur doloremque ab laborum vel maiores quaerat?";
  render() {
    return (
      <section id="training" className="content">
        <img
          src={Logo}
          class="hide-gt-sm activities__logo padding-xxs"
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
              <TrainingCard title="python" content={this.cardText} />
            </div>
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="django" content={this.cardText} />
            </div>
            <div className="grid__column grid__column--8--sm grid__column--6--md grid__column--4--lg">
              <TrainingCard title="fullstack" content={this.cardText} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Training;
