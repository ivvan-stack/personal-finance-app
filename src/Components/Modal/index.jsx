import React, { Component } from "react";
import gameOver from '../../Assets/img/images'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {close: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { 
    this.setState(
      state => ({ close: !state.close })
    ); 
  }

  render() {
    return (
      <div id="modal" className={`modal ${this.state.close ? 'is-active' : 'invisible'}`}>
        <div className="modal-background has-background-dark" />
        <div className="modal-card is-clipped is-dark">
          <section className="modal-card-body">
            <p className="image is-4by3">
              <img src={gameOver.gameOver} alt="Game Over" />
            </p>
          </section>
          <footer className="modal-card-foot">
            <button className="button button-lineal primary large" onClick={() => this.handleClick()}>Jugar de nuevo</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default Modal;