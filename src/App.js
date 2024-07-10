import React from 'react';
// import Navbar from './Navbar';
import './App.css';
import ParentSwitch from './props/Parentswitch';
import ParentMessage from './props/Parentmsg';
import ParentCounter from './props/Parentcounter';
// import Watch from './stopwatch';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Watch/> */}
      <ParentSwitch/>
      <ParentMessage/>
      <ParentCounter/>
    </>
  );
};

export default App;
