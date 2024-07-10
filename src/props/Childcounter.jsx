import React from 'react';

const ChildCounter = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button>
    </div>
  );
};

export default ChildCounter;
