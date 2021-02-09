import React, { Component } from "react";

class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="panel is-pulled-left col-2_md-12_sm-12 asside-center">
        <div className="notification is-radiusless is-dark">
          <p className="title is-size-3-fullhd is-size-4-widescreen is-size-5-desktop is-size-2-mobile">Has realizado:</p>
          <p className="title is-size-3-fullhd is-size-4-widescreen is-size-5-desktop is-size-2-mobile">
            <span className="title is-size-1 number-of-intents">{this.props.attemps}</span> intentos
          </p>
          <div className="panel-block">
            <button id="reset-game" className="button button-lineal large white" onClick={this.props.resetGame}>
              Reiniciar juego
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Aside;
