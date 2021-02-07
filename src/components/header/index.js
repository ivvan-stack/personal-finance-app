import React, { Component } from "react";
import images from "../../assets/img/images";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-danger"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className="" src={images.icon} />
            <div className="navbar-title">
              <div className="navbar-item">
                <h1 className="title">Personal Finance App</h1>
              </div>
            </div>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">+ Agregar cuentas</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Revisar</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Ingresos</a>
                <a className="navbar-item">Gastos</a>
                <a className="navbar-item">Transferencias</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Ver gráficas</a>
              </div>
            </div>
          </div>
          {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Registrate</strong>
                </a>
                <a className="button is-light">Inicia sesión</a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Header;
