import React from 'react';

const Header = props => {
  return (
    <div>
      <h1>Memory Game</h1>
      <h3>Instructions</h3>
      <p>Click on two cards. If both cards match, you earn a point. If they don't they flip back over and you have to try again. The game continues until all cards have been matched.</p>
      <h2>Score: {props.score}</h2>
    </div>
  );
}

export default Header;
