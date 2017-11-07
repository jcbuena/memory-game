import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Game from './components/Game'

import { generateColors } from './helpers'

const NUM_CARDS = 32;

class App extends Component {

  // state = {
  //   score: 0,
  //   cards: generateColors(NUM_CARDS / 2)
  // };

  render() {
    return (
      <div>
        <Header score={0} />
        <Game />
      </div>
    );
  }
}

export default App;
