import React, { Component } from "react";
import "./program.css";
import { Link } from "react-router-dom";

class Program extends Component {
  render() {
    return (
      <section id="program">
        <h2 className="program__title">programme</h2>
        <div className="grid grid--justify-center program__card-container">
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <Link to="/python">
              <div className="card program__info-card-python">
                <div className="program__content-card-python">
                  <div className="program__content-card-title">python</div>
                  <Link to="/python">
                    <div className="program__more-infos-btn">
                      En savoir plus
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <Link to="/docker">
              <div className="card program__info-card-docker">
                <div className="program__content-card-docker">
                  <div className="program__content-card-title">docker</div>
                  <Link to="/docker">
                    <div className="program__more-infos-btn">
                      En savoir plus
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <Link to="/django">
              <div className="card program__info-card-django">
                <div className="program__content-card-django">
                  <div className="program__content-card-title">django</div>
                  <Link to="/django">
                    <div className="program__more-infos-btn">
                      En savoir plus
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Program;
