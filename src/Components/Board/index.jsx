import React, { Component } from "react";
import Card from "../Card";
import Modal from "../Modal";
import Aside from "../Aside";
import shuffle from "lodash.shuffle";
var map = require('array-map');

const getInitialState = (data)=> {
  const deck = shuffle(data)
  return {
    deck,
    pairSelected: [],
    isComparing: false,
    attemps: 0,
    itsOver: false
  }
}

class Board extends Component {

  constructor(props){
    super(props);
    this.state = getInitialState(this.props.cards);
  }

  render() {
    return (
      <div className="grid">
        <Aside attemps={this.state.attemps} resetGame={() => this.resetGame()} />
        <div className="memory-game col-10_md-12_sm-12">
          <div className="grid re-central">
            {map(this.state.deck, (card, index) => {
              const isComparing = this.state.pairSelected.indexOf(card) > -1;
              return (
                <Card 
                key={index} 
                itemid={card.id} 
                urlimg={card.image} 
                isComparing={isComparing}
                selectCard={() => this.selectCard(card)}
                wasGuessed={card.wasGuessed}
                />
              )
            })}
            <Modal 
            attemps={this.state.attemps} 
            resetGame={() => this.resetGame()}
            />
          </div>
        </div>
      </div>
    )
  }

  selectCard(card) {
    if(this.state.isComparing || this.state.pairSelected.indexOf(card) > -1 || card.wasGuessed) {
      return;
    }
    const pairSelected = [...this.state.pairSelected, card];
    this.setState({
      pairSelected
    })
    if(pairSelected.length === 2) {
      this.comparaingPair(pairSelected)
    }
  }

  comparaingPair(pairSelected) {
    this.setState({isComparing: true});
    
    setTimeout(() => {
      const [firstCard, secondCard] = pairSelected;
      let deck = this.state.deck;

      if(firstCard.image === secondCard.image) {
        deck = deck.map((card) => {
          if(card.image !== firstCard.image) {
            return card;
          }
          return {...card, wasGuessed: true}
        });
      }
      this.setState({
        pairSelected: [],
        deck,
        isComparing: false,
        attemps: this.state.attemps + 1
      });
      this.reviewWinner(deck);
    }, 1000)
  }

  reviewWinner(deck) {
    if(deck.filter((card) => !card.wasGuessed).length  === 0) {
      let modal = document.getElementById('modal');
      modal.className += ' is-active'
    }
  }

  resetGame() {
    this.setState(
      getInitialState(this.props.cards)
    );
  }
}

export default Board;