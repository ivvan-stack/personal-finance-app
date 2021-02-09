import React, { Component } from "react";
import gameOver from '../../assets/img/images'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { close: false };
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
        <div className="modal-card is-clipped">
          <article className="message is-light">
            <div className="message-header">
              <p></p>
              <button className="delete button button-flat primary small" aria-label="delete" onClick={() => this.handleClick()} />
            </div>
            <div className="message-body">
            <p className="image is-4by3">
              <img src={gameOver.gameOver} alt="Game Over" />
            </p>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default Modal;