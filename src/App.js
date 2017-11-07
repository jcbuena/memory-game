import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Game from './components/Game'

import { generateCards } from './helpers'

const NUM_CARDS = 36;

class App extends Component {

  state = {
    score: 0,
    cards: generateCards(NUM_CARDS)
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <Game cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
