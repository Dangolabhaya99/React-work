import React from 'react';

const ChildSwitch = ({ isSwitchOn, toggleSwitch }) => {
  return (
    <div>
      <p>The switch is {isSwitchOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleSwitch}>SWITCH</button>
    </div>
  );
};

export default ChildSwitch;
