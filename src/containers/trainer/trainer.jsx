import React, { PureComponent } from "react";
import "./trainer.css";
import TrainerCard from "components/trainerCard/trainerCard";

class Trainer extends PureComponent {
  render() {
    return (
      <section id="trainer">
        <TrainerCard />
      </section>
    );
  }
}

export default Trainer;
