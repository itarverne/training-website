import React, { Component } from "react";
import "./formation.css";
import { Link } from "react-router-dom";

class Formation extends Component {

  name = "david.rigaudie";
  domain = "itarverne";
  tld = "com";

  render() {
    return (
      <section id="formation">
        <h2 className="formation__title">formations</h2>
        <div className="grid grid--justify-center formation__card-container">
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <Link to="/python">
              <div className="card formation__info-card-python">
                <div className="formation__content-card-python">
                  <div className="formation__content-card-title">python</div>
                  <Link to="/python">
                    <div className="formation__more-infos-btn">
                      En savoir plus
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <Link to="/docker">
              <div className="card formation__info-card-docker">
                <div className="formation__content-card-docker">
                  <div className="formation__content-card-title">docker</div>
                  <Link to="/docker">
                    <div className="formation__more-infos-btn">
                      En savoir plus
                    </div>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <div className="card formation__info-card-django">
              <div className="formation__content-card-django">
                <div className="formation__content-card-title">django</div>
                  <div className="formation__more-infos-btn">
                    <a href={`mailto:${this.name}@${this.domain}.${this.tld}`}>
                      Nous consulter
                    </a>
                  </div>
              </div>
            </div>
          </div>
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <div className="card formation__info-card-react">
              <div className="formation__content-card-react">
                <div className="formation__content-card-title">react</div>
                  <div className="formation__more-infos-btn">
                    <a href={`mailto:${this.name}@${this.domain}.${this.tld}`}>
                      Nous consulter
                    </a>
                  </div>
              </div>
            </div>
          </div>
          <div className=" grid__column grid__column--12 grid__column--11--sm grid__column--6--md grid__column--4--lg ">
            <div className="card formation__info-card-git">
              <div className="formation__content-card-git">
                <div className="formation__content-card-title">git</div>
                  <div className="formation__more-infos-btn">
                    <a href={`mailto:${this.name}@${this.domain}.${this.tld}`}>
                      Nous consulter
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Formation;
