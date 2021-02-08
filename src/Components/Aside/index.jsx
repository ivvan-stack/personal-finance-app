import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="panel is-light is-pulled-left col-2_md-12_sm-12">
        <p className="panel-block">
          <Link className="navbar-item font-dark" to="/add-accounts">Ver puntuaciones</Link>
        </p>
        <h1 className="panel-heading text-left">
          Formas de Jugar
        </h1>
        <Link to="/" className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          Juego básico
        </Link>
        <Link to="/" className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          Con límite de tiempo
        </Link>
        <Link to="/" className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          Con límite de intentos
        </Link>
        <div className="notification is-radiusless is-darkis-dark">
          <p className="title is-size-3-fullhd is-size-4-widescreen is-size-5-desktop is-size-2-mobile">Has intentado:</p>
          <p className="title is-size-3-fullhd is-size-4-widescreen is-size-5-desktop is-size-2-mobile"><span className="number-of-intents">0000</span> veces</p>
        </div>
        <div className="panel-block">
          <button id="reset-game" className="button is-dark is-outlined is-fullwidth">
            Reiniciar juego
          </button>
        </div>
      </nav>
    );
  }
}

export default Aside;
