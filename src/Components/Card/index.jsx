import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
  render() {
    //console.log(this.props.id)
    return (
        <div className="col-3_md-3_sm-3" key={this.props.id}>
          <ReactCardFlip>
            <div className="card memory-card">
                <div className="card-image">
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