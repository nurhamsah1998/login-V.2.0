import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';

function Auth() {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div>
      {!index ? <Login /> : <Register />}
      {/* <p onClick={toggleIndex}>{!index ? 'Dont have key?' : 'already hasve key?'}</p> */}
    </div>
  );
}

export default Auth;
