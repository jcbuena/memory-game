import React from 'react';

import Card from './Card'


const Game = props => {
  let k = 0;
  return (
    <div className="game">
      {props.cards.map(c => <Card color={c} key={k++} />)}
    </div>
  );
}

export default Game;
