import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Game from './components/Game'

import { generateCards, generateBlankCards } from './helpers'

const NUM_CARDS = 36;
const REAL_CARDS = generateCards(NUM_CARDS);

class App extends Component {
  state = {
    score: 0,
    cards: generateBlankCards(NUM_CARDS),
    displayedCard: ""
  };

  flipCard = (c, color) => {
      const newCards = {}
      Object.assign(newCards, this.state.cards);
      newCards[c] = color;
      this.setState({cards: newCards, displayedCard: color})
      if (color === this.state.displayedCard) {
        this.setState({displayedCard: "", score: this.state.score + 1})
      } else if (!this.state.displayedCard){
        this.setState({displayedCard: color});
      } else {
        this.setState({displayedCard: "", cards: generateBlankCards(NUM_CARDS)})
      }
     
      


      // if (!this.state.displayedCards.includes(color)) this.setState({displayedCards: this.state.displayedCards.concat(color)})
      // if (this.state.displayedCards.length === 1) this.setState({displayedCards: [], cards: generateBlankCards(NUM_CARDS)})
      // if (this.state.displayedCards.includes(color)) this.setState({displayedCards: [], score: this.state.score + 1, cards: generateBlankCards(NUM_CARDS)})
  
    
     
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <Game cards={this.state.cards} realCards={REAL_CARDS} flip={this.flipCard}/>
      </div>
    );
  }
}

export default App;
