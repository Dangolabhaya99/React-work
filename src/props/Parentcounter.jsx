import React, { useState } from 'react';
import ChildCounter from './Childcounter';

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <ChildCounter count={count} increment={increment} decrement={decrement} />
    </div>
  );
};

export default ParentCounter;
