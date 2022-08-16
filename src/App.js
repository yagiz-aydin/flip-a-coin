import React, { useState } from 'react';
import Tail from './images/tail.png';
import Head from './images/head.png';

const App = () => {
  const [totalFlip, setTotalFlip] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [currentState, setCurrentState] = useState();

  const flipCoin = () => {
    let _number = Math.floor(Math.random() * 2);
    setTotalFlip(totalFlip + 1);
    if(_number === 1){
      setTails(tails + 1)
      setCurrentState('tail');
    }else{
      setHeads(heads + 1);
      setCurrentState('head');
    }
  };

  return (
    <div className="page">
      <div>Coin State</div>
      <div>
        {currentState === 'tail' && <img src={Tail} alt="tail"/>}
        {currentState === 'head' && <img src={Head} alt="head"/>}
      </div>
      <button className="button" onClick={() => flipCoin()}>
        Try to Flip
      </button>
      <div>Total: {totalFlip}</div>
      <div>Head: {heads}</div>
      <div>Tail: {tails}</div>
    </div>
  );
}

export default App;
