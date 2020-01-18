import React, { Component } from "react";

export default class Header extends Component {
  tel = "06.44.28.80.72";
  render() {
    return (
      <header className="header g-blur-header">
        <aside className="header__nav header__nav-formation">
          <nav id="nav" className="nav-training">
            <a href="/" className="header__logo header__logo-training">
              <img src="./images/logo-formation.png" alt="ITArverne" />
            </a>
            <ul className="header__nav-list">
              <li className="header__nav-element">
                <a
                  href="#training"
                  className="header__title header__title-training"
                >
                  Formation
                </a>
              </li>
              <li className="header__nav-element">
                <a
                  href="#trainer"
                  className="header__title header__title-training"
                >
                  Votre formateur
                </a>
              </li>
              <li className="header__nav-element">
                <a
                  href="#program"
                  className="header__title header__title-training"
                >
                  Programme
                </a>
              </li>
            </ul>
            <div className="header__nav-img">
              <a href={`tel:${this.tel}`}>
                <img src="../../images/tel.png" alt="ITArverne" />
              </a>
            </div>
          </nav>
        </aside>
      </header>
    );
  }
}
