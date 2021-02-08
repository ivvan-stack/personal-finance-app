import React, { Component } from "react";
import Card from "../Card";
var map = require('array-map');

class Board extends Component {
  render() {
    const cards = this.props.cards
    console.log(cards);
    return (
      <div className="grid re-central">
        {map(cards, (card, index) => {
          /* const thisCompared = this.props.pairSelected.indexOf(card) > -1; */
          return (
            <Card 
            key={index} 
            itemid={card.id} 
            urlimg={card.image} 
            /* thisCompared={thisCompared} 
            selectCard={()=>{this.props.selectCard(card)}} 
            wasGuessed={card.wasGuessed} */
            />
          )
        })}
      </div>
    )
  }
}

export default Board;