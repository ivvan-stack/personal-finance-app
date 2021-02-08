import React, { Component } from "react";
import Card from "../Card";

class Board extends Component {
  render() {
    const cards = this.props.cards
    console.log(cards);
    return (
      <div className="grid re-central">
        {cards.map((card, index) =>
          <Card key={index} id={card.id} image={card.image} />
        )}
      </div>
    )
  }
}

export default Board