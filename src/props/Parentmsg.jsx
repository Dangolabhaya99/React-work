import React, { useState } from 'react';
import ChildMessage from './Childmsg';

const ParentMessage = () => {
  const [message, setMessage] = useState("YAMAL");

  const updateMessage = () => {
    setMessage("YAMALE");
  };

  return (
    <div>
      <ChildMessage message={message} updateMessage={updateMessage} />
    </div>
  );
};

export default ParentMessage;
