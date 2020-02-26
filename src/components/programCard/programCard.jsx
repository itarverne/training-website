import React, { PureComponent } from "react";
import "./programCard.css";

class ProgramCard extends PureComponent {
  render() {
    return (
      <div className="programCard">
        <div className="grid grid--justify-center programCard__grid">
          <div className="grid__column grid__column--12 padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="programCard__left">
              <div className="programCard__title padding-xs">programme</div>
              {this.props.dictionary.left.map(item => (
                <div key={item.title}>
                  <div className="programCard_header">
                    <label
                      htmlFor={item.title}
                      className="programCard__subTitle margin-nulled"
                    >
                      {item.title}
                    </label>
                    <input
                      className="programCard__checkbox control__checkbox"
                      type="checkbox"
                      checked={this.props.choices.includes(item.title)}
                      id={item.title}
                      onChange={() => this.props.handleCheck(item.title)}
                    />
                  </div>
                  <ul className="list list--unstyled">
                    {item.elements.map(el => (
                      <li
                        className="programCard__elements padding-xs padding-nulled"
                        key={el}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="grid__column grid__column--12 padding-nulled grid__column--11--sm grid__column--8--md grid__column--5--lg">
            <div className="programCard__right">
              {this.props.dictionary.right.map(item => (
                <div key={item.title}>
                  <div className="programCard_header">
                    <label
                      htmlFor={item.title}
                      className="programCard__subTitle margin-nulled"
                    >
                      {item.title}
                    </label>
                    <input
                      className="programCard__checkbox control__checkbox"
                      type="checkbox"
                      checked={this.props.choices.includes(item.title)}
                      id={item.title}
                      onChange={() => this.props.handleCheck(item.title)}
                    />
                  </div>
                  <ul className="list list--unstyled">
                    {item.elements.map(el => (
                      <li
                        className="programCard__elements padding-xs padding-nulled"
                        key={el}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramCard;
