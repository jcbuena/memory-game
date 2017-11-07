import React from 'react';

const Card = props => {
  return (
    <div className="card" style={{backgroundColor: props.color}} onClick={() => props.flip(props.num, props.realColor)}>
    </div>
  );
}

export default Card;
