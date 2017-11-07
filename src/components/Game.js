import React from 'react';

import Card from './Card'

const generateCards = n => {
  const cards = [];
  for (let i = 0; i < n; i++) {
    cards.push(<Card key={i}/>);
  }
  return cards;
}

const Game = props => {
  return (
    <div className="game">
      {generateCards(36)}
    </div>
  );
}

export default Game;
