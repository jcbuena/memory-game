import React from 'react';

import Card from './Card'


const Game = props => {
  let k = 0;
  return (
    <div className="game">
      {Object.keys(props.cards).map( c => <Card 
                                            color={props.cards[c]} 
                                            num={c} 
                                            realColor={props.realCards[c]} 
                                            flip={props.flip}
                                            key={k++} />)}
    </div>
  );
}

export default Game;
