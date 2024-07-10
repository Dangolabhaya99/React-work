import React, { useState } from 'react';
import ChildSwitch from './Childswitch';

const ParentSwitch = () => {
  const [Switch, setSwitch] = useState(false);

  const toggleSwitch = () => {
    setSwitch(bool => !bool);
  };

  return (
    <div>
      <ChildSwitch isSwitchOn={Switch} toggleSwitch={toggleSwitch} />
    </div>
  );
};

export default ParentSwitch;
