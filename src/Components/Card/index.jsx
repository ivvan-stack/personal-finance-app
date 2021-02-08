import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <div className="col-3_md-3_sm-3">
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
              <div className="card memory-card">
                  <div className="card-image" onClick={this.handleClick}>
                      <figure className="image is-4by3">
                          <div className="is-dark"></div>
                      </figure>
                  </div>
              </div>
              <div className="card memory-card">
                  <div className="card-image" onClick={this.handleClick}>
                      <figure className="image is-4by3">
                          <img src={this.props.image} alt={this.props.id}/>
                      </figure>
                  </div>
              </div>
        </ReactCardFlip>
      </div>
    )
  }
}

export default Card