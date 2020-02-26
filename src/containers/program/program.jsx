import React, { PureComponent } from "react";
import "./program.css";
import { Link } from "react-router-dom";

class Program extends PureComponent {
  render() {
    return (
      <section id="program">
        <h2 className="program__title">programme</h2>
        <div className="grid grid--justify-center program__card-container">
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--10--md grid__column--5--lg ">
            <div className="card program__info-card-python">
              <div className="program__content-card-python">
                <div className="program__content-card-title">python</div>
                <Link to="/python">
                  <div className="program__more-infos-btn">En savoir plus</div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--10--md grid__column--5--lg ">
            <div className="card program__info-card-docker">
              <div className="program__content-card-docker">
                <div className="program__content-card-title">docker</div>
                <Link to="/docker">
                  <div className="program__more-infos-btn">En savoir plus</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Program;
