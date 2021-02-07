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
                <h1 className="title">Personal Finance App</h1>
              </div>
            </div>
          </Link>
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
            <Link className="navbar-item" to="/add-accounts">+ Agregar cuentas</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Revisar</a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/ingresos">Ingresos</Link>
                <Link className="navbar-item" to="/gastos">Gastos</Link>
                <Link className="navbar-item" to="/transferencias">Transferencias</Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/graphics">Ver gráficas</Link>
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
