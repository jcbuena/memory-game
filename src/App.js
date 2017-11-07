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
    cards: generateBlankCards(36)
  };

  flipCard = (c, color) => {
    const newCards = this.state.cards;
    if (newCards[c] !== "#000000") {
      newCards[c] = "#000000";
      this.setState({
      cards: newCards
      })
    } else {
      newCards[c] = color;
      this.setState({
        cards: newCards
      })
    }
    
     
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
