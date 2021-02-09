import React, { Component } from "react";
import images from "../../Assets/img/images";
import { Link } from "react-router-dom"

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="" src={images.icon} />
            <div className="navbar-title">
              <div className="navbar-item">
                <h1 className="title">Rick and Morty Game</h1>
              </div>
            </div>
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/whats">¿Qué es esto?</Link>
            <Link className="navbar-item" to="/how">¿Cómo jugar?</Link>
            <Link className="navbar-item" to="/why">Beneficios de jugar</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button button-lineal small white" target="_blank" href="https://github.com/ivvan-stack/rick-and-morty">
                  <small>Acerca de</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
