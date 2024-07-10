import React from 'react';

const ChildMessage = ({ message, updateMessage }) => {
  return (
    <div>
      <p>Current message: {message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default ChildMessage;
