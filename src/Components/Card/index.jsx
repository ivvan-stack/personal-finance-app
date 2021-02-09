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
      <div className="col-3_md-3_sm-4" onClick={this.props.selectCard}>
        <ReactCardFlip isFlipped={this.props.isComparing || this.props.wasGuessed} disabled={true} flipDirection="horizontal">
              <div className="card memory-card">
                  <div className="card-image" onClick={this.handleClick}>
                      <figure className="image is-4by3">
                        <h1 className="memory-card-title outlined">?</h1>
                      </figure>
                  </div>
              </div>
              <div className="card memory-card">
                  <div className="card-image" onClick={this.handleClick}>
                      <figure className="image is-4by3">
                          <img src={this.props.urlimg} alt={this.props.itemid}/>
                      </figure>
                  </div>
              </div>
        </ReactCardFlip>
      </div>
    )
  }
}

export default Card