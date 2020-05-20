import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  tel = "06.44.28.80.72";
  name = "david.rigaudie";
  domain = "itarverne";
  tld = "com";
  render() {
    return (
      <footer className="footer padding-xxs">
        <div className="grid grid--justify-center grid--center">
          <div className="grid__column grid__column--2--lg hide-sm">
            <ul className="list list--unstyled">
              <li className="list__item">
                <a href="#training" className="footer__text">
                  Formation
                </a>
              </li>
              <li className="list__item">
                <a href="#trainer" className="footer__text">
                  Formateur
                </a>
              </li>
              <li className="list__item">
                <a href="#formation" className="footer__text">
                  Formations
                </a>
              </li>
              <li className="list__item">
                <Link className="footer__text" to="/python">
                  Python
                </Link>
              </li>
              <li className="list__item">
                <Link className="footer__text" to="/docker">
                  Docker
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid__column grid__column--3--lg grid__column--6--sm">
            <a
              href="https://goo.gl/maps/ynJwNjxFSVyuBpscA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="vertical-center">
                <img
                  src="../../images/localisation_brown.png"
                  alt="Localisation"
                />
                <span className="footer__adresse">
                  Pépinière Entreprise <br />
                  3 route de Riom <br />
                  63530 VOLVIC
                </span>
              </div>
            </a>
          </div>
          <div className="grid__column grid__column--3--lg hide-sm">
            <div className="vertical-center">
              <img src="../../images/logo-itarverne.png" alt="ITArverne" />
            </div>
          </div>
          <div className="grid__column grid__column--3--lg grid__column--6--sm">
            <ul className="list list--inline">
              <li className="list__item">
                <a
                  href="https://www.linkedin.com/company/itarverne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../images/linkedin_brown.png" alt="LinkedIn" />
                </a>
              </li>
              <li className="list__item">
                <a
                  href="https://www.facebook.com/itarverne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../images/facebook_brown.png" alt="Facebook" />
                </a>
              </li>
              <li className="list__item">
                <a
                  href="https://twitter.com/itarverne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../../images/twitter_brown.png" alt="Twitter" />
                </a>
              </li>
              <li className="list__item">
                <a href={`mailto:${this.name}@${this.domain}.${this.tld}`}>
                  <img src="../../images/mail_brown.png" alt="Email" />
                </a>
              </li>
              <li className="list__item">
                <a href={`tel:${this.tel}`} className="lady-brown">
                  <img
                    src="../../images/tel-footer_brown.png"
                    alt="Téléphone"
                  />
                </a>
              </li>
            </ul>
            <div className="js-insert-wonderpush">
              <span className="footer__text">Build with ❤ by </span>
              <a
                className="footer__text"
                href="https://github.com/itarverne/generator-itarverne-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                ITArverne 2019-2020
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
