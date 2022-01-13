import React from 'react';
import { useUserContext } from '../context/userContext';

function Dasbor() {
  const { user, userLogOut } = useUserContext();
  return (
    <div>
      <p>hello</p>
      <button onClick={userLogOut}>metu</button>
    </div>
  );
}

export default Dasbor;
